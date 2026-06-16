import { Suspense } from "react";
import { Box, Container } from "@mui/material";
import BlogList from "@/components/BlogList";
import { blogPosts, getBlogCategories } from "@/data/site";

export const metadata = {
  title: "Blog | KruskalCode",
  description:
    "Read the latest insights from KruskalCode on AI, cloud, web development, and product strategy.",
};

export default function BlogPage() {
  const categories = getBlogCategories();

  return (
    <Box component="main" sx={{ bgcolor: "#f8fafc", py: { xs: 2, md: 2 } }}>
      <Container maxWidth="lg">
        <Suspense fallback={null}>
          <BlogList posts={blogPosts} categories={categories} />
        </Suspense>
      </Container>
    </Box>
  );
}
