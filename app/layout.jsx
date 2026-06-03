import { DM_Sans, Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://kruskalcode.com"),
  title: {
    default: "KruskalCode | Web, Mobile & Cloud Development Experts",
    template: "%s | KruskalCode",
  },
  description:
    "KruskalCode is an Islamabad software agency building scalable web, mobile, cloud, AI, and DevOps solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0A0F1E] font-body text-white antialiased">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
