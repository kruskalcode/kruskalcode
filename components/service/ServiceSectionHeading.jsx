import { Box, Typography } from "@mui/material";

export default function ServiceSectionHeading({
  title,
  align = "center",
  sx = {},
}) {
  return (
    <Box sx={{ textAlign: align, mb: { xs: 4, md: 5 }, ...sx }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.5rem", md: "1.7rem" },
          fontWeight: 700,
          color: "#fcb51e",
          fontFamily: "'Sora', sans-serif",
          lineHeight: 1.25,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
