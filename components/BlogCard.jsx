import Image from "next/image";
import NextLink from "next/link";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function BlogCard({ post }) {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#ffffff",
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid #eeebeb",
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: 280 }}>
        <Image
          src={post.image || "/assets/choose-us.jpg"}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Box
        sx={{
          p: { xs: 3, md: 4 },
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Typography
          sx={{
            color: "#fcb51e",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            mb: 1,
            fontSize: 12,
          }}
        >
          {post.category}
        </Typography>

        <Typography
          component="h2"
          sx={{
            fontSize: { xs: "1rem", md: "1.3rem" },
            fontWeight: 700,
            color: "#0f172a",
            mb: 1,
          }}
        >
          {post.title}
        </Typography>

        <Typography
          sx={{
            color: "#475569",
            fontSize: "15px",
            flex: 1,
          }}
        >
          {post.excerpt}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 1 }}>
          <Typography sx={{ fontSize: 13, color: "#64748b" }}>
            {post.date}
          </Typography>
          <Typography sx={{ fontSize: 13, color: "#64748b" }}>•</Typography>
          <Typography sx={{ fontSize: 13, color: "#64748b" }}>
            {post.author}
          </Typography>
        </Stack>

        <Button
          component={NextLink}
          href={`/blog/${post.slug}/`}
          sx={{
            color: "#fcb51e",
            fontWeight: 700,
            textTransform: "none",
            px: 0,
            fontSize: 14,
          }}
        >
          Read article
        </Button>
      </Box>
    </Box>
  );
}
