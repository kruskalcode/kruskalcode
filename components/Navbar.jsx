"use client";

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
import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, getServiceHref, navLinks, services } from "@/data/site";

function isNavActive(pathname, href) {
  const normalizedPath = pathname.replace(/\/$/, "") || "/";
  const normalizedHref = href.replace(/\/$/, "") || "/";

  if (normalizedHref === "/") {
    return normalizedPath === "/";
  }

  return (
    normalizedPath === normalizedHref ||
    normalizedPath.startsWith(`${normalizedHref}/`)
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesAnchor, setServicesAnchor] = useState(null);
  const [logoFailed, setLogoFailed] = useState(false);

  const openServices = (event) => setServicesAnchor(event.currentTarget);
  const closeServices = () => setServicesAnchor(null);

  const navButtonSx = (href) => {
    const active = isNavActive(pathname, href);

    return {
      color: active ? "#fcb51e" : "#1a1a1a",
      px: 2,
      py: 1,
      fontSize: 15,
      fontWeight: 600,
      textTransform: "none",
      minWidth: "auto",
      lineHeight: 1.4,
      "&:hover": {
        bgcolor: "transparent",
        color: "#fcb51e",
      },
    };
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        bgcolor: "#ffffff",
        borderRadius: 0,
        borderBottom: scrolled
          ? "1px solid rgba(15, 23, 42, 0.10)"
          : "1px solid rgba(15, 23, 42, 0.06)",
        boxShadow: scrolled ? "0 8px 24px rgba(15, 23, 42, 0.06)" : "none",
        transition: "box-shadow 220ms ease, border-color 220ms ease",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          mx: "auto",
          width: "100%",
          maxWidth: 1320,
          minHeight: { xs: 72, md: 88 },
          px: { xs: 2, sm: 3, md: 4 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box
          component={NextLink}
          href="/"
          prefetch
          sx={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            mr: { lg: 4 },
          }}
        >
          {!logoFailed ? (
            <Box
              sx={{
                height: { xs: 52, md: 64 },
                width: "auto",
                display: "block",
              }}
            >
              <Image
                src={company.logo}
                alt={`${company.name} software development agency logo`}
                width={260}
                height={100}
                onError={() => setLogoFailed(true)}
                priority
                style={{ height: "100%", width: "auto", display: "block" }}
              />
            </Box>
          ) : (
            <Stack direction="row" spacing={1.2} alignItems="center">
              <Box
                sx={{
                  display: "grid",
                  width: 42,
                  height: 42,
                  placeItems: "center",
                  borderRadius: 2,
                  border: "2px solid #fcb51e",
                  bgcolor: "#fff",
                  color: "#0a0f1e",
                  fontFamily: "var(--font-sora), 'Sora', sans-serif",
                  fontWeight: 900,
                }}
              >
                K
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#1a2a5e",
                    fontFamily: "var(--font-sora), 'Sora', sans-serif",
                    fontSize: 20,
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "0.04em",
                  }}
                >
                  KRUSKALCODE
                </Typography>
                <Typography
                  sx={{
                    mt: 0.4,
                    color: "#fcb51e",
                    fontSize: 10,
                    fontWeight: 700,
                  }}
                >
                  {company.tagline}
                </Typography>
              </Box>
            </Stack>
          )}
        </Box>

        <Stack
          component="nav"
          direction="row"
          alignItems="center"
          sx={{
            display: { xs: "none", lg: "flex" },
            ml: "auto",
            gap: 0.25,
          }}
        >
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <Button
                key={link.href}
                component={NextLink}
                href={link.href}
                prefetch
                onMouseEnter={openServices}
                endIcon={
                  <ExpandMoreIcon
                    sx={{
                      fontSize: 18,
                      color: isNavActive(pathname, link.href)
                        ? "#fcb51e"
                        : "#1a1a1a",
                    }}
                  />
                }
                sx={navButtonSx(link.href)}
              >
                {link.label}
              </Button>
            ) : (
              <Button
                key={link.href}
                component={NextLink}
                href={link.href}
                prefetch
                sx={navButtonSx(link.href)}
              >
                {link.label}
              </Button>
            ),
          )}

          <Button
            href={company.scheduleUrl}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            sx={{
              ml: 2.5,
              borderRadius: 999,
              bgcolor: "#fcb51e",
              color: "#1a1a1a",
              fontWeight: 700,
              fontSize: 14,
              px: 3,
              py: 1.1,
              boxShadow: "none",
              textTransform: "none",
              whiteSpace: "nowrap",
              "&:hover": { bgcolor: "#e09f16", boxShadow: "none" },
            }}
          >
            Schedule Free Call
          </Button>
        </Stack>

        <IconButton
          aria-label="Open navigation menu"
          onClick={() => setDrawerOpen(true)}
          sx={{
            display: { xs: "inline-flex", lg: "none" },
            ml: "auto",
            color: "#0f172a",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Menu
        anchorEl={servicesAnchor}
        open={Boolean(servicesAnchor)}
        onClose={closeServices}
        MenuListProps={{ onMouseLeave: closeServices }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 320,
              bgcolor: "#ffffff",
              color: "#0f172a",
              boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
            },
          },
        }}
      >
        {services.map((service) => (
          <MenuItem
            key={service.slug}
            component={NextLink}
            href={getServiceHref(service)}
            prefetch
            onClick={closeServices}
            sx={{ whiteSpace: "normal", py: 1.2 }}
          >
            {service.title.replace(/\n/g, " ")}
          </MenuItem>
        ))}
      </Menu>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 320, bgcolor: "#fff", minHeight: "100%", p: 2 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 1 }}
          >
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider sx={{ mb: 1 }} />
          <List>
            {navLinks.map((link) => (
              <ListItemButton
                key={link.href}
                component={NextLink}
                href={link.href}
                prefetch
                onClick={() => setDrawerOpen(false)}
                sx={{
                  borderRadius: 2,
                  color: isNavActive(pathname, link.href)
                    ? "#fcb51e"
                    : "#1a1a1a",
                }}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
          <Divider sx={{ my: 1 }} />
          <Typography sx={{ px: 2, py: 1, color: "#fcb51e", fontWeight: 700 }}>
            Services
          </Typography>
          <List dense>
            {services.map((service) => (
              <ListItemButton
                key={service.slug}
                component={NextLink}
                href={getServiceHref(service)}
                prefetch
                onClick={() => setDrawerOpen(false)}
                sx={{ borderRadius: 2 }}
              >
                <ListItemText primary={service.title.replace(/\n/g, " ")} />
              </ListItemButton>
            ))}
          </List>
          <Button
            fullWidth
            href={company.scheduleUrl}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#fcb51e",
              color: "#1a1a1a",
              fontWeight: 700,
              textTransform: "none",
              borderRadius: 999,
              "&:hover": { bgcolor: "#e09f16" },
            }}
          >
            Schedule Free Call
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
