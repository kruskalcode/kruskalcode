import { createTheme } from "@mui/material/styles";

const headingFont = "var(--font-sora), 'Sora', sans-serif";
const bodyFont = "var(--font-inter), 'Inter', sans-serif";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fcb51e",
      dark: "#e6a018",
      contrastText: "#0a0f1e",
    },
    background: {
      default: "#0a0f1e",
      paper: "#0f172a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#94A3B8",
    },
  },
  typography: {
    fontFamily: bodyFont,
    h1: {
      fontFamily: headingFont,
      fontWeight: 800,
      letterSpacing: "-0.045em",
      lineHeight: 1.06,
    },
    h2: {
      fontFamily: headingFont,
      fontWeight: 750,
      letterSpacing: "-0.035em",
      lineHeight: 1.12,
    },
    h3: {
      fontFamily: headingFont,
      fontWeight: 700,
      letterSpacing: "-0.025em",
      lineHeight: 1.18,
    },
    h4: {
      fontFamily: headingFont,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      lineHeight: 1.25,
    },
    h5: {
      fontFamily: headingFont,
      fontWeight: 700,
      letterSpacing: "-0.015em",
      lineHeight: 1.32,
    },
    h6: {
      fontFamily: headingFont,
      fontWeight: 700,
      letterSpacing: "-0.01em",
      lineHeight: 1.35,
    },
    body1: {
      lineHeight: 1.75,
    },
    body2: {
      lineHeight: 1.65,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "-0.01em",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#0f172a",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 18,
          boxShadow: "0 18px 45px rgba(0,0,0,0.18)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#0f172a",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 18,
          boxShadow: "0 18px 45px rgba(0,0,0,0.18)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#ffffff",
          color: "#0f172a",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#fcb51e",
          color: "#0a0f1e",
          fontWeight: 700,
        },
      },
    },
  },
});

export default theme;
