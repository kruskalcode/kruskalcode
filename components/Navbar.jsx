"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Menu, X } from "lucide-react";
import { company } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-[#0A0F1E]/90 shadow-xl shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 font-heading text-lg font-bold text-white shadow-lg shadow-blue-600/30">
            K
          </span>
          <span>
            <span className="block font-heading text-xl font-bold tracking-tight text-white">
              {company.name}
            </span>
            <span className="hidden text-xs text-slate-400 sm:block">{company.tagline}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href={company.scheduleUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500 lg:inline-flex"
        >
          <Calendar className="h-4 w-4" aria-hidden="true" />
          Schedule Free Call
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-[#0A0F1E]/95 px-5 pb-6 pt-2 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={company.scheduleUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Schedule Free Call
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
