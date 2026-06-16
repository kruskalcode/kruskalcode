import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const publicRoot = path.join(projectRoot, "public");
const assetsRoot = path.join(publicRoot, "assets");
const outputRoot = path.join(assetsRoot, "optimized");
const manifestPath = path.join(projectRoot, "lib", "optimized-images.json");

const rasterExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const targetWidths = [320, 480, 640, 768, 1024, 1280, 1600, 1920];

function toPublicPath(filePath) {
  return `/${path.relative(publicRoot, filePath).split(path.sep).join("/")}`;
}

function outputPathFor(relativePath, width, format) {
  const parsed = path.parse(relativePath);
  return path.join(outputRoot, parsed.dir, `${parsed.name}-${width}.${format}`);
}

async function collectImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const images = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (path.resolve(fullPath) === path.resolve(outputRoot)) continue;
      images.push(...(await collectImages(fullPath)));
      continue;
    }

    if (rasterExtensions.has(path.extname(entry.name).toLowerCase())) {
      images.push(fullPath);
    }
  }

  return images;
}

async function optimizeImage(sourcePath) {
  const relativePath = path.relative(assetsRoot, sourcePath);
  const metadata = await sharp(sourcePath).metadata();

  if (!metadata.width || !metadata.height) {
    return null;
  }

  const widths = targetWidths.filter((width) => width <= metadata.width);
  const largestTargetWidth = targetWidths[targetWidths.length - 1];
  if (metadata.width <= largestTargetWidth && !widths.includes(metadata.width)) {
    widths.push(metadata.width);
  }

  const variants = {
    avif: {},
    webp: {},
  };

  for (const width of widths) {
    for (const format of ["avif", "webp"]) {
      const outputPath = outputPathFor(relativePath, width, format);
      await mkdir(path.dirname(outputPath), { recursive: true });

      const pipeline = sharp(sourcePath)
        .rotate()
        .resize({ width, withoutEnlargement: true });

      if (format === "avif") {
        await pipeline.avif({ quality: 50, effort: 6 }).toFile(outputPath);
      } else {
        await pipeline.webp({ quality: 78, effort: 5 }).toFile(outputPath);
      }

      variants[format][width] = toPublicPath(outputPath);
    }
  }

  return {
    src: toPublicPath(sourcePath),
    width: metadata.width,
    height: metadata.height,
    variants,
  };
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

const images = await collectImages(assetsRoot);
const manifestEntries = await Promise.all(images.map(optimizeImage));
const manifest = manifestEntries
  .filter(Boolean)
  .sort((a, b) => a.src.localeCompare(b.src))
  .reduce((acc, entry) => {
    acc[entry.src] = {
      width: entry.width,
      height: entry.height,
      variants: entry.variants,
    };
    return acc;
  }, {});

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

console.log(
  `Optimized ${Object.keys(manifest).length} images into ${toPublicPath(outputRoot)}.`,
);
