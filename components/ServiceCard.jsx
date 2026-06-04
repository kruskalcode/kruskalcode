import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import { getServiceHref } from "@/data/site";
import ServiceIcon from "@/components/ServiceIcon";

export default function ServiceCard({ service, large = false }) {
  return (
    <Card
      sx={{
        height: "100%",
        transition: "transform 220ms ease, border-color 220ms ease",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "primary.main",
        },
      }}
    >
      <CardContent sx={{ display: "flex", minHeight: large ? 340 : 280, flexDirection: "column", p: 3 }}>
        <Box
          sx={{
            mb: 3,
            display: "grid",
            height: 54,
            width: 54,
            placeItems: "center",
            borderRadius: "50%",
            color: "primary.main",
            backgroundColor: "#0a0f1e",
            border: "1px solid rgba(252,181,30,0.28)",
          }}
        >
          <ServiceIcon name={service.icon} fontSize="medium" />
        </Box>
        <Typography variant={large ? "h5" : "h6"} component="h3" gutterBottom>
          {service.title}
        </Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
          {service.description}
        </Typography>
        {large ? (
          <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 3 }}>
            {service.features.slice(0, 3).map((feature) => (
              <Chip
                key={feature}
                label={feature}
                size="small"
                sx={{
                  maxWidth: "100%",
                  bgcolor: "rgba(252,181,30,0.1)",
                  color: "primary.main",
                  border: "1px solid rgba(252,181,30,0.2)",
                }}
              />
            ))}
          </Stack>
        ) : null}
        <Box sx={{ flex: 1 }} />
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
