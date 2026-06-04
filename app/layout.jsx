/* eslint-disable @next/next/no-page-custom-font */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ThemeRegistry from "@/components/ThemeRegistry";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://kruskalcode.com"),
  title: {
    default: "KruskalCode | Web, Mobile & Cloud Development Experts",
    template: "%s | KruskalCode",
  },
  description:
    "KruskalCode is an Islamabad software agency building scalable web, mobile, cloud, AI, and DevOps solutions.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeRegistry>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
