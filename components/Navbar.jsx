"use client";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import NextLink from "next/link";
import { useState } from "react";
import { company, getServiceHref, navLinks, services } from "@/data/site";

const navButtonSx = {
  position: "relative",
  color: "#1f2937",
  px: 1.4,
  py: 1,
  fontSize: 15,
  fontWeight: 700,
  "&:hover": {
    bgcolor: "transparent",
    color: "#0a0f1e",
  },
  "&:after": {
    content: '""',
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 5,
    height: 2,
    borderRadius: 999,
    bgcolor: "#fcb51e",
    opacity: 0,
    transform: "scaleX(0.4)",
    transition: "opacity 180ms ease, transform 180ms ease",
  },
  "&:hover:after": {
    opacity: 1,
    transform: "scaleX(1)",
  },
};

export default function Navbar() {
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesAnchor, setServicesAnchor] = useState(null);
  const [logoFailed, setLogoFailed] = useState(false);

  const openServices = (event) => setServicesAnchor(event.currentTarget);
  const closeServices = () => setServicesAnchor(null);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        bgcolor: "#ffffff",
        borderBottom: scrolled ? "1px solid rgba(15, 23, 42, 0.12)" : "1px solid rgba(15, 23, 42, 0.06)",
        boxShadow: scrolled ? "0 12px 30px rgba(15, 23, 42, 0.08)" : "none",
        transition: "box-shadow 220ms ease",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          mx: "auto",
          width: "100%",
          maxWidth: 1240,
          minHeight: { xs: 76, md: 86 },
          gap: 2,
          px: { xs: 2, md: 3 },
        }}
      >
        <Box component={NextLink} href="/" sx={{ display: "flex", alignItems: "center", minWidth: 220 }}>
          {!logoFailed ? (
            <Box
              component="img"
              src={company.logo}
              alt={`${company.name} logo`}
              onError={() => setLogoFailed(true)}
              sx={{ maxHeight: 58, width: "auto" }}
            />
          ) : (
            <Stack direction="row" spacing={1.2} alignItems="center">
              <Box
                sx={{
                  display: "grid",
                  width: 42,
                  height: 42,
                  placeItems: "center",
                  borderRadius: 2,
                  bgcolor: "#fcb51e",
                  color: "#0a0f1e",
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 900,
                }}
              >
                K
              </Box>
              <Box>
                <Typography sx={{ color: "#0a0f1e", fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 800, lineHeight: 1 }}>
                  KruskalCode
                </Typography>
                <Typography sx={{ mt: 0.4, color: "#64748b", fontSize: 11, fontWeight: 700, letterSpacing: 0.4 }}>
                  Software Agency
                </Typography>
              </Box>
            </Stack>
          )}
        </Box>

        <Stack
          component="nav"
          direction="row"
          spacing={1}
          sx={{ display: { xs: "none", lg: "flex" }, flex: 1, justifyContent: "center" }}
        >
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <Button
                key={link.href}
                component={NextLink}
                href={link.href}
                onMouseEnter={openServices}
                endIcon={<ExpandMoreIcon />}
                sx={navButtonSx}
              >
                {link.label}
              </Button>
            ) : (
              <Button key={link.href} component={NextLink} href={link.href} sx={navButtonSx}>
                {link.label}
              </Button>
            ),
          )}
        </Stack>

        <Button
          href={company.scheduleUrl}
          target="_blank"
          rel="noreferrer"
          variant="contained"
          color="primary"
          startIcon={<CalendarMonthIcon />}
          sx={{
            display: { xs: "none", lg: "inline-flex" },
            borderRadius: 999,
            color: "#0a0f1e",
            px: 2.8,
            py: 1.25,
            boxShadow: "0 10px 24px rgba(252,181,30,0.28)",
            "&:hover": { bgcolor: "#e6a018" },
          }}
        >
          Schedule Free Call
        </Button>

        <IconButton
          aria-label="Open navigation menu"
          onClick={() => setDrawerOpen(true)}
          sx={{ display: { xs: "inline-flex", lg: "none" }, ml: "auto", color: "#0f172a" }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Menu
        anchorEl={servicesAnchor}
        open={Boolean(servicesAnchor)}
        onClose={closeServices}
        MenuListProps={{ onMouseLeave: closeServices }}
        slotProps={{ paper: { sx: { mt: 1, minWidth: 320, bgcolor: "#ffffff", color: "#0f172a" } } }}
      >
        {services.map((service) => (
          <MenuItem
            key={service.slug}
            component={NextLink}
            href={getServiceHref(service)}
            onClick={closeServices}
            sx={{ whiteSpace: "normal", py: 1.2 }}
          >
            {service.title}
          </MenuItem>
        ))}
      </Menu>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 320, bgcolor: "background.default", minHeight: "100%", p: 2 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "text.primary" }}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", mb: 1 }} />
          <List>
            {navLinks.map((link) => (
              <ListItemButton
                key={link.href}
                component={NextLink}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                sx={{ borderRadius: 2 }}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", my: 1 }} />
          <Typography sx={{ px: 2, py: 1, color: "primary.main", fontWeight: 700 }}>
            Services
          </Typography>
          <List dense>
            {services.map((service) => (
              <ListItemButton
                key={service.slug}
                component={NextLink}
                href={getServiceHref(service)}
                onClick={() => setDrawerOpen(false)}
                sx={{ borderRadius: 2 }}
              >
                <ListItemText primary={service.title} />
              </ListItemButton>
            ))}
          </List>
          <Button
            fullWidth
            href={company.scheduleUrl}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            color="primary"
            startIcon={<CalendarMonthIcon />}
            sx={{ mt: 2, color: "#0a0f1e" }}
          >
            Schedule Free Call
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
