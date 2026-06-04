import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import NextLink from "next/link";
import { getServiceHref } from "@/data/site";
import ServiceIcon from "@/components/ServiceIcon";

export default function ServiceCard({ service, large = false }) {
  return (
    <Card
      sx={{
        height: "100%",
        transition: "transform 220ms ease, border-color 220ms ease, background 220ms ease",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "primary.main",
          background: "rgba(255,255,255,0.07)",
        },
      }}
    >
      <CardContent sx={{ display: "flex", minHeight: large ? 310 : 280, flexDirection: "column", p: 3 }}>
        <Box
          sx={{
            mb: 3,
            display: "grid",
            height: 58,
            width: 58,
            placeItems: "center",
            borderRadius: 3,
            color: "primary.main",
            backgroundColor: "rgba(252,181,30,0.12)",
            border: "1px solid rgba(252,181,30,0.28)",
          }}
        >
          <ServiceIcon name={service.icon} fontSize="medium" />
        </Box>
        <Typography variant={large ? "h5" : "h6"} component="h3" gutterBottom>
          {service.title}
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1, lineHeight: 1.75 }}>
          {large ? service.longDescription : service.description}
        </Typography>
        <Button
          component={NextLink}
          href={getServiceHref(service)}
          endIcon={<ArrowForwardIcon />}
          sx={{ alignSelf: "flex-start", mt: 3, color: "primary.main" }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}
