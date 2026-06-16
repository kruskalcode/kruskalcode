import { Suspense } from "react";
import { Box, Container } from "@mui/material";
import JsonLd from "@/components/JsonLd";
import BlogList from "@/components/BlogList";
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog";
import { createMetadata, getBreadcrumbSchema, pageSeo } from "@/lib/seo";

export const metadata = createMetadata(pageSeo.blog);

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  const categories = getBlogCategories();

  return (
    <Box component="main" sx={{ bgcolor: "#f8fafc", py: { xs: 2, md: 2 } }}>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: pageSeo.blog.path },
        ])}
      />
      <Container maxWidth="lg">
        <Suspense fallback={null}>
          <BlogList posts={blogPosts} categories={categories} />
        </Suspense>
      </Container>
    </Box>
  );
}
