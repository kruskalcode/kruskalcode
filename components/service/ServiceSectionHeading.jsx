import { Box, Typography } from "@mui/material";

export default function ServiceSectionHeading({
  title,
  align = "center",
  component = "h2",
  sx = {},
}) {
  return (
    <Box sx={{ textAlign: align, mb: { xs: 4, md: 5 }, ...sx }}>
      <Typography
        variant="h2"
        component={component}
        sx={{
          fontSize: { xs: "1.5rem", md: "1.7rem" },
          fontWeight: 700,
          color: "#fcb51e",
          fontFamily: "var(--font-sora), 'Sora', sans-serif",
          lineHeight: 1.25,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
