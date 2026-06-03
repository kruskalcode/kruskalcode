import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import MotionSection from "@/components/MotionSection";
import { company, services } from "@/data/site";

export const metadata = {
  title: "Contact",
  description:
    "Contact KruskalCode in Islamabad for web, mobile, cloud, AI, DevOps, staffing, and software consulting projects.",
};

const contactCards = [
  {
    label: "Address",
    value: company.location,
    href: "https://maps.google.com/?q=Plot%2081%20St%204%20Sector%20I-10%2F3%20Islamabad%2C%20Pakistan",
    icon: MapPin,
  },
  {
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: company.phone,
    href: `tel:${company.phone}`,
    icon: Phone,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-36 lg:px-8 lg:pt-44">
        <div className="bg-grid absolute inset-0 -z-10" />
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">Contact</p>
          <h1 className="mt-5 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Tell us what you want to build.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Share a few details and KruskalCode will help you choose the right path for your
            product, platform, or technical team.
          </p>
        </div>
      </section>

      <MotionSection className="px-5 pb-24 pt-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            action={`mailto:${company.email}`}
            method="post"
            encType="text/plain"
            className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-blue-950/20 backdrop-blur md:p-8"
          >
            <h2 className="font-heading text-3xl font-bold text-white">Start a conversation</h2>
            <p className="mt-3 text-slate-300">
              This static form opens your email client with the submitted details.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-200">Name</span>
                <input
                  name="Name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#0A0F1E]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-200">Email</span>
                <input
                  type="email"
                  name="Email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#0A0F1E]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-200">Phone</span>
                <input
                  name="Phone"
                  className="w-full rounded-2xl border border-white/10 bg-[#0A0F1E]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
                  placeholder="+92..."
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-200">Service</span>
                <select
                  name="Service"
                  className="w-full rounded-2xl border border-white/10 bg-[#0A0F1E]/70 px-4 py-3 text-white outline-none transition focus:border-blue-400"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service.slug} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-semibold text-slate-200">Message</span>
              <textarea
                name="Message"
                required
                rows={6}
                className="w-full rounded-2xl border border-white/10 bg-[#0A0F1E]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
                placeholder="Tell us about your project, timeline, and goals."
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto"
            >
              Submit Message
            </button>
          </form>

          <div className="space-y-5">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.label === "Address" ? "_blank" : undefined}
                  rel={card.label === "Address" ? "noreferrer" : undefined}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition hover:border-blue-400/50 hover:bg-white/[0.09]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {card.label}
                    </span>
                    <span className="mt-2 block font-semibold text-white">{card.value}</span>
                  </span>
                </a>
              );
            })}

            <a
              href={company.scheduleUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Schedule Free Call
            </a>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06]">
              <iframe
                title="KruskalCode Islamabad I-10/3 map"
                src="https://www.google.com/maps?q=Plot%2081%20St%204%20Sector%20I-10%2F3%20Islamabad%2C%20Pakistan&output=embed"
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </MotionSection>
    </>
  );
}
