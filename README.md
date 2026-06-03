# KruskalCode Static Website

A static Next.js 14 website for KruskalCode, an Islamabad-based software agency focused on web, mobile, cloud, AI, DevOps, consulting, and staffing services.

## Tech Stack

- Next.js 14 App Router
- Tailwind CSS
- Framer Motion
- Lucide React
- Static export for shared hosting

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build Static HTML

```bash
npm run build
```

The site is configured with:

```js
output: "export";
trailingSlash: true;
images: { unoptimized: true };
```

After the build finishes, static files are generated in the `out/` directory.

## Deploy to GoDaddy Shared Hosting

1. Run `npm run build`.
2. Open the generated `out/` directory.
3. Upload everything inside `out/` to the GoDaddy hosting document root, usually `public_html/`.
4. Confirm `.htaccess` is uploaded. It is copied from `public/.htaccess` during the Next.js export.
5. Visit `https://kruskalcode.com` and test:
   - `/`
   - `/about/`
   - `/services/`
   - `/services/web-design-development/`
   - `/portfolio/`
   - `/contact/`

## Updating Content

- Company details and service content live in `data/site.js`.
- Shared layout components live in `components/`.
- App Router pages live in `app/`.

## Contact

- Email: `info@kruskalcode.com`
- Phone: `+923314442274`
- Scheduling: `https://cal.com/kruskalcode`
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
