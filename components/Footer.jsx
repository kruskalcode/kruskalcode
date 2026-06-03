import Link from "next/link";
import {
  BriefcaseBusiness,
  Camera,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PlayCircle,
} from "lucide-react";
import { company, services } from "@/data/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const socialIcons = {
  Facebook: Globe2,
  Instagram: Camera,
  LinkedIn: BriefcaseBusiness,
  Twitter: MessageCircle,
  YouTube: PlayCircle,
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B16]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 font-heading text-lg font-bold text-white">
              K
            </span>
            <span className="font-heading text-2xl font-bold text-white">{company.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">{company.tagline}</p>
          <div className="mt-6 flex gap-3">
            {company.socials.map((social) => {
              const Icon = socialIcons[social.name] || Globe2;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-blue-400 hover:bg-blue-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link className="text-sm text-slate-400 transition hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-white">Services</h3>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  className="text-sm text-slate-400 transition hover:text-white"
                  href={`/services/${service.slug}`}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-white">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-slate-400">
            <li className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
              <span>{company.location}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="transition hover:text-white">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
              <a href={`tel:${company.phone}`} className="transition hover:text-white">
                {company.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
