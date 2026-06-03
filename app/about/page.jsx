import { CheckCircle2, Target, Users } from "lucide-react";
import MotionSection from "@/components/MotionSection";

export const metadata = {
  title: "About",
  description:
    "Learn about KruskalCode, an Islamabad software agency focused on scalable web, mobile, cloud, and AI product development.",
};

const values = [
  "Build reliable technology that supports real business outcomes.",
  "Communicate clearly from discovery through launch and support.",
  "Use modern engineering practices without unnecessary complexity.",
];

const team = [
  { name: "KruskalCode Lead", role: "Product & Engineering" },
  { name: "Solutions Architect", role: "Cloud & Architecture" },
  { name: "Delivery Specialist", role: "Design, QA & Support" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-36 lg:px-8 lg:pt-44">
        <div className="bg-grid absolute inset-0 -z-10" />
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">About Us</p>
          <h1 className="mt-5 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Software delivery shaped by strategy, craft, and care.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            KruskalCode is a software agency based in Islamabad, Pakistan, helping companies build,
            modernize, and scale digital products across web, mobile, cloud, and AI.
          </p>
        </div>
      </section>

      <MotionSection className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur lg:p-10">
            <h2 className="font-heading text-4xl font-bold text-white">Our Story</h2>
            <p className="mt-6 leading-8 text-slate-300">
              KruskalCode was created for teams that need dependable software partners, not just
              code output. We bring together product planning, modern UI development, backend
              engineering, cloud infrastructure, and ongoing support to help clients move from idea
              to reliable launch.
            </p>
            <p className="mt-5 leading-8 text-slate-300">
              From our base in Islamabad, we work with clients across markets to deliver websites,
              mobile apps, AI-powered workflows, DevOps systems, and technical consulting with a
              focus on clarity, quality, and long-term maintainability.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-blue-400/20 bg-blue-600/10 p-8">
              <Target className="h-10 w-10 text-blue-300" aria-hidden="true" />
              <h2 className="mt-5 font-heading text-3xl font-bold text-white">Our Mission</h2>
              <p className="mt-4 leading-8 text-slate-300">
                To help founders, agencies, and companies launch digital products that are useful,
                scalable, secure, and easy to improve after the first release.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8">
              <Users className="h-10 w-10 text-blue-300" aria-hidden="true" />
              <h2 className="mt-5 font-heading text-3xl font-bold text-white">Our Values</h2>
              <ul className="mt-5 space-y-4">
                {values.map((value) => (
                  <li key={value} className="flex gap-3 text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 pb-24 pt-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">Team</p>
            <h2 className="mt-4 font-heading text-4xl font-bold text-white">
              A focused delivery team for ambitious products.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 text-center backdrop-blur"
              >
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-blue-400/30 bg-gradient-to-br from-blue-600/40 to-slate-900 font-heading text-3xl font-bold text-white">
                  {member.name.charAt(0)}
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold text-white">{member.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
