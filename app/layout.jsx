import { Inter, Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import PageTransition from "@/components/PageTransition";
import ThemeRegistry from "@/components/ThemeRegistry";
import {
  createMetadata,
  getLocalBusinessSchema,
  getOrganizationSchema,
  pageSeo,
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata = {
  metadataBase: new URL("https://kruskalcode.com"),
  ...createMetadata(pageSeo.home),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable}`}>
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getLocalBusinessSchema()} />
        <ThemeRegistry>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
