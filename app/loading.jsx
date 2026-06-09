import { Box, Container, Skeleton, Stack } from "@mui/material";

export default function Loading() {
  return (
    <Box component="main" sx={{ bgcolor: "#f8fafc", minHeight: "60vh", py: 6 }}>
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Skeleton variant="text" width="30%" sx={{ bgcolor: "rgba(148, 163, 184, 0.18)" }} />
          <Skeleton variant="rectangular" height={48} sx={{ borderRadius: 2, bgcolor: "rgba(148, 163, 184, 0.18)" }} />
          <Skeleton variant="rectangular" height={220} sx={{ borderRadius: 3, bgcolor: "rgba(148, 163, 184, 0.18)" }} />
          <Stack direction="row" spacing={2}>
            <Skeleton variant="circular" width={42} height={42} sx={{ bgcolor: "rgba(148, 163, 184, 0.18)" }} />
            <Skeleton variant="circular" width={42} height={42} sx={{ bgcolor: "rgba(148, 163, 184, 0.18)" }} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
