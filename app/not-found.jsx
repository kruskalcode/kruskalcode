import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found on KruskalCode.",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden px-5 py-36 lg:px-8">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-heading text-8xl font-bold text-blue-500">404</p>
        <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
          The page may have moved, or the link may be incorrect. Head back home and keep exploring
          KruskalCode.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
