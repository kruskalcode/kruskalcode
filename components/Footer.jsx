import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, services } from "@/data/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const socialIcons = {
  Facebook: "/assets/social_icons/facebook.svg",
  Instagram: "/assets/social_icons/instagram.svg",
  LinkedIn: "/assets/social_icons/linkedin.svg",
  Twitter: "/assets/social_icons/twitter.svg",
  YouTube: "/assets/social_icons/youtube.svg",
};

export default function Footer() {
  return (
    <footer className="site-footer border-t footer-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="h-11 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            {company.tagline}
          </p>
          <div className="mt-6 flex gap-2">
            {company.socials.map((social) => {
              const iconSrc = socialIcons[social.name];
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:-translate-y-0.5"
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.12)",
                  }}
                >
                  {iconSrc ? (
                    <img
                      src={iconSrc}
                      alt={`${social.name} icon`}
                      className="h-7 w-7"
                    />
                  ) : null}
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold">Quick Links</h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="text-sm text-muted transition hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold">Services</h3>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  className="text-sm text-muted transition hover:text-white"
                  href={`/services/${service.slug}`}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-muted">
            <li className="flex gap-3">
              <MapPin
                className="mt-1 h-4 w-4 shrink-0 text-accent"
                aria-hidden="true"
              />
              <span>{company.location}</span>
            </li>
            <li className="flex gap-3">
              <Mail
                className="mt-1 h-4 w-4 shrink-0 text-accent"
                aria-hidden="true"
              />
              <a
                href={`mailto:${company.email}`}
                className="transition hover:text-white"
              >
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone
                className="mt-1 h-4 w-4 shrink-0 text-accent"
                aria-hidden="true"
              />
              <a
                href={`tel:${company.phone}`}
                className="transition hover:text-white"
              >
                {company.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t footer-border px-5 py-6 text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
