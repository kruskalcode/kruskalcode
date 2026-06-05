import { Box, Card, CardContent, Typography } from "@mui/material";
import ServiceIcon from "@/components/ServiceIcon";

export default function ServiceCard({ service, large = false }) {
  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        aspectRatio: "1 / 1",
        background: "#ffffff !important",
        border: "1px solid #e2e8f0 !important",
        borderRadius: "0 !important",
        mt: 0,
        mx: "auto",
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        transition: "transform 300ms ease, box-shadow 300ms ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
        },
        gap: 0.2,
      }}
    >
      <CardContent
        sx={{
          p: { xs: 3, md: 4 },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "100%",
        }}
      >
        <Box
          sx={{
            mb: 1.5,
            color: "#fcb51e",
            display: "inline-flex",
          }}
        >
          <ServiceIcon name={service.icon} sx={{ fontSize: 56 }} />
        </Box>
        <Typography
          variant={large ? "h5" : "h6"}
          component="h3"
          sx={{ 
            fontWeight: 800, 
            color: "#0f172a", 
            mb: 2,
            width: "100%",
            minHeight: "2.6em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1.3,
            fontSize: "1.1rem",
            px: 1,
            whiteSpace: "pre-line",
          }}
        >
          {service.title}
        </Typography>
        <Typography sx={{ lineHeight: 1.8, fontSize: 14, color: "#475569" }}>
          {service.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
