"use client";

import { useEffect, useMemo, useState } from "react";
import NextLink from "next/link";
import { Box, Button, Grid, Typography } from "@mui/material";
import ServiceSectionHeading from "@/components/service/ServiceSectionHeading";
import BlogCard from "@/components/BlogCard";

export default function BlogList({ posts, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredPosts = useMemo(
    () =>
      selectedCategory
        ? posts.filter(
            (post) =>
              post.category.toLowerCase() === selectedCategory.toLowerCase(),
          )
        : posts,
    [posts, selectedCategory],
  );

  useEffect(() => {
    const category = new URLSearchParams(window.location.search).get("category");
    setSelectedCategory(category || "");
  }, []);

  return (
    <>
      <ServiceSectionHeading
        title={
          selectedCategory
            ? `${selectedCategory} Articles`
            : "Software Development Blog"
        }
        component="h1"
        align="center"
        sx={{ mb: 3 }}
      />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 1.2,
          mb: 5,
        }}
      >
        <Button
          component={NextLink}
          href="/blog/"
          sx={{
            borderRadius: 999,
            px: 2,
            py: 1,
            textTransform: "none",
            fontWeight: selectedCategory ? 600 : 800,
            color: selectedCategory ? "#0f172a" : "#ffffff",
            bgcolor: selectedCategory ? "rgba(252, 181, 30, 0.12)" : "#fcb51e",
            border: selectedCategory
              ? "1px solid rgba(252, 181, 30, 0.25)"
              : "1px solid #fcb51e",
            boxShadow: selectedCategory
              ? "none"
              : "0 10px 24px rgba(252, 181, 30, 0.25)",
            "&:hover": {
              bgcolor: selectedCategory
                ? "rgba(252, 181, 30, 0.18)"
                : "#e09f16",
            },
          }}
        >
          All posts
        </Button>

        {categories.map((category) => {
          const isActive = selectedCategory.toLowerCase() === category.slug;

          return (
            <Button
              key={category.slug}
              component={NextLink}
              href={`/blog/?category=${category.slug}`}
              sx={{
                borderRadius: 999,
                px: 2,
                py: 1,
                textTransform: "none",
                fontWeight: isActive ? 800 : 600,
                color: isActive ? "#ffffff" : "#0f172a",
                bgcolor: isActive ? "#fcb51e" : "#ffffff",
                border: "1px solid rgba(15, 23, 42, 0.10)",
                boxShadow: isActive
                  ? "0 10px 24px rgba(252, 181, 30, 0.25)"
                  : "0 10px 24px rgba(15, 23, 42, 0.06)",
                "&:hover": {
                  bgcolor: isActive ? "#e09f16" : "rgba(252, 181, 30, 0.10)",
                  color: isActive ? "#ffffff" : "#0f172a",
                },
              }}
            >
              {category.title}
            </Button>
          );
        })}
      </Box>

      <Grid container spacing={4}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Grid item xs={12} sm={6} lg={4} key={post.slug}>
              <BlogCard post={post} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box
              sx={{
                bgcolor: "#ffffff",
                border: "1px solid rgba(15, 23, 42, 0.08)",
                borderRadius: 3,
                p: { xs: 3, md: 5 },
                textAlign: "center",
              }}
            >
              <Typography sx={{ color: "#475569", fontSize: "16px" }}>
                New KruskalCode articles are being prepared for review.
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
}
