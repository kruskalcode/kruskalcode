import NextLink from "next/link";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function BlogSidebar({
  categories,
  currentCategory,
  relatedPosts,
}) {
  return (
    <Box sx={{ position: "sticky", top: 24 }}>
      <Box
        sx={{
          bgcolor: "#ffffff",
          borderRadius: 3,
          p: 3,
          boxShadow: "0 18px 40px rgba(15, 23, 42, 0.06)",
          border: "1px solid rgba(15, 23, 42, 0.08)",
          mb: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "#0f172a",
            mb: 2,
          }}
        >
          Categories
        </Typography>

        <Stack spacing={0.6}>
          <Button
            component={NextLink}
            href="/blog/"
            sx={{
              justifyContent: "space-between",
              color: currentCategory ? "#0f172a" : "#1a1a1a",
              fontWeight: currentCategory ? 800 : 600,
              textTransform: "none",
              px: 1.25,
              py: 1,
              borderRadius: 2,
              border: currentCategory
                ? "1px solid rgba(252, 181, 30, 0.25)"
                : "1px solid transparent",
              bgcolor: currentCategory
                ? "rgba(252, 181, 30, 0.08)"
                : "transparent",
              "&:hover": {
                bgcolor: "rgba(252, 181, 30, 0.10)",
                color: "#0f172a",
              },
            }}
          >
            <span>All posts</span>
            <Typography
              component="span"
              sx={{ color: "#64748b", fontWeight: 600 }}
            >
              {categories.reduce((sum, item) => sum + item.count, 0)}
            </Typography>
          </Button>

          {categories.map((category) => {
            const isActive = currentCategory?.toLowerCase() === category.slug;

            return (
              <Button
                key={category.slug}
                component={NextLink}
                href={`/blog/?category=${category.slug}`}
                sx={{
                  justifyContent: "space-between",
                  color: isActive ? "#0f172a" : "#1a1a1a",
                  fontWeight: isActive ? 800 : 600,
                  textTransform: "none",
                  px: 1.25,
                  py: 1,
                  borderRadius: 2,
                  border: isActive
                    ? "1px solid rgba(252, 181, 30, 0.25)"
                    : "1px solid transparent",
                  bgcolor: isActive
                    ? "rgba(252, 181, 30, 0.08)"
                    : "transparent",
                  "&:hover": {
                    bgcolor: "rgba(252, 181, 30, 0.10)",
                    color: "#0f172a",
                  },
                }}
              >
                <span>{category.title}</span>
                <Typography
                  component="span"
                  sx={{ color: "#64748b", fontWeight: 600 }}
                >
                  {category.count}
                </Typography>
              </Button>
            );
          })}
        </Stack>
      </Box>

      <Box
        sx={{
          bgcolor: "#ffffff",
          borderRadius: 3,
          p: 3,
          boxShadow: "0 18px 40px rgba(15, 23, 42, 0.06)",
          border: "1px solid rgba(15, 23, 42, 0.08)",
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "#0f172a",
            mb: 2,
          }}
        >
          Related posts
        </Typography>

        <Stack spacing={2}>
          {relatedPosts.length > 0 ? (
            relatedPosts.map((post) => (
              <Box key={post.slug}>
                <Button
                  component={NextLink}
                  href={`/blog/${post.slug}/`}
                  sx={{
                    justifyContent: "flex-start",
                    textTransform: "none",
                    color: "#0f172a",
                    fontWeight: 700,
                    px: 1,
                    py: 0.75,
                    minHeight: 0,
                  }}
                >
                  {post.title}
                </Button>
                <Typography sx={{ fontSize: 13, color: "#64748b" }}>
                  {post.category} • {post.date}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography sx={{ fontSize: 14, color: "#64748b" }}>
              Related articles will appear as the blog library grows.
            </Typography>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
