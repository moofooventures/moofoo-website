import { Home, ShieldCheck, Scale, Landmark, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Industry } from "@/lib/industries";

const icons = { Home, ShieldCheck, Scale, Landmark };

export default function IndustryDetailCard({ industry }: { industry: Industry }) {
  const Icon = icons[industry.icon];

  return (
    <div className="group rounded-2xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-xl hover:shadow-ink/5">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-soft text-blue transition-all duration-300 group-hover:scale-110 group-hover:bg-blue group-hover:text-white">
        <Icon className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-ink">{industry.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{industry.description}</p>

      <div className="mt-6 grid grid-cols-1 gap-4 border-t border-line pt-6 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.1em] text-blue uppercase">
            Example Consumer Need
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{industry.consumerNeed}</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.1em] text-blue uppercase">
            Routing Considerations
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {industry.routingConsideration}
          </p>
        </div>
      </div>

      <p className="mt-6 text-xs text-muted">
        Powered by the same{" "}
        <span className="font-medium text-ink">qualification, routing, and reporting</span>{" "}
        infrastructure as every MooFoo vertical.
      </p>

      <Link
        href="/contact"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors hover:text-blue-deep"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
      </Link>
    </div>
  );
}
