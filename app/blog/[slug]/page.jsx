import Image from "next/image";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import BlogSidebar from "@/components/BlogSidebar";
import {
  blogPosts,
  getBlogCategories,
  getBlogPostBySlug,
  getBlogRelatedPosts,
} from "@/data/site";
import {
  createMetadata,
  getArticleSchema,
  getBlogPostSeo,
  getBreadcrumbSchema,
} from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: {
        absolute: "Blog Post Not Found | KruskalCode",
      },
    };
  }

  return createMetadata({
    ...getBlogPostSeo(post),
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.date,
  });
}

export default function BlogDetailPage({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const categories = getBlogCategories();
  const relatedPosts = getBlogRelatedPosts(post.slug, post.category);
  const postSeo = getBlogPostSeo(post);

  return (
    <Box component="main" sx={{ bgcolor: "#f8fafc", py: { xs: 2, md: 2 } }}>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: post.title, path: postSeo.path },
        ])}
      />
      <JsonLd data={getArticleSchema(post)} />
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                bgcolor: "transparent",
                borderRadius: 0,
                overflow: "visible",
                boxShadow: "none",
              }}
            >
              <Box sx={{ p: { xs: 0, md: 0 } }}>
                <Box sx={{ mb: 3 }}>
                  <Breadcrumbs
                    separator="›"
                    aria-label="breadcrumb"
                    sx={{
                      color: "#64748b",
                      fontSize: "0.95rem",
                      "& .MuiBreadcrumbs-separator": {
                        color: "#64748b",
                      },
                    }}
                  >
                    <Link
                      component={NextLink}
                      href="/"
                      underline="hover"
                      sx={{ color: "#64748b", fontWeight: 600 }}
                    >
                      Home
                    </Link>
                    <Link
                      component={NextLink}
                      href="/blog/"
                      underline="hover"
                      sx={{ color: "#64748b", fontWeight: 600 }}
                    >
                      Blog
                    </Link>
                    <Typography sx={{ color: "#0f172a", fontWeight: 700 }}>
                      {post.category}
                    </Typography>
                  </Breadcrumbs>
                </Box>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: { xs: "2rem", md: "2.6rem" },
                    fontWeight: 800,
                    color: "#0f172a",
                    mb: 1.5,
                    lineHeight: 1.1,
                  }}
                >
                  {post.title}
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  sx={{ mb: 2.5 }}
                >
                  <Typography
                    sx={{
                      color: "#fcb51e",
                      fontWeight: 800,
                      fontSize: 13,
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                    }}
                  >
                    {post.category}
                  </Typography>
                  <Typography sx={{ color: "#64748b", fontSize: 13 }}>
                    •
                  </Typography>
                  <Typography sx={{ color: "#64748b", fontSize: 13 }}>
                    {post.date}
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    color: "#475569",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  {post.excerpt}
                </Typography>

                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 260, md: 380 },
                    borderRadius: 0.5,
                    overflow: "hidden",
                    mb: 4,
                  }}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 70vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.2}
                  alignItems={{ xs: "flex-start", sm: "center" }}
                  sx={{ mb: 4 }}
                >
                  <Typography
                    sx={{
                      color: "#0f172a",
                      fontWeight: 700,
                      fontSize: 14,
                      px: 1.25,
                      py: 0.6,
                      borderRadius: 999,
                      bgcolor: "rgba(252, 181, 30, 0.12)",
                    }}
                  >
                    By {post.author}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#64748b",
                      fontSize: 13,
                    }}
                  >
                    8 min read • Expert insights
                  </Typography>
                </Stack>

                {post.content.map((paragraph, index) => (
                  <Typography
                    key={index}
                    sx={{
                      color: "#334155",
                      fontSize: "16px",
                      lineHeight: 1.9,
                      mb: 3,
                    }}
                  >
                    {paragraph}
                  </Typography>
                ))}

                <Button
                  component={NextLink}
                  href="/blog/"
                  variant="contained"
                  sx={{
                    mt: 2,
                    bgcolor: "#fcb51e",
                    color: "#0f172a",
                    textTransform: "none",
                    fontWeight: 700,
                    boxShadow: "none",
                    borderRadius: 999,
                    px: 2.5,
                    py: 1,
                    "&:hover": { bgcolor: "#e09f16", boxShadow: "none" },
                  }}
                >
                  Back to blog
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <BlogSidebar
              categories={categories}
              currentCategory={post.category}
              relatedPosts={relatedPosts}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
