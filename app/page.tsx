import Button from "@/components/Button";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/categories";

export default function Home() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
          <p className="gold-underline w-fit text-xs tracking-[0.3em] text-gold-deep uppercase">
            MooFoo Ventures
          </p>
          <h1 className="mt-8 max-w-3xl text-balance font-serif-display text-4xl leading-tight text-black md:text-6xl">
            Building AI-Powered Businesses That Generate Customers
          </h1>
          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted md:text-lg">
            MooFoo Ventures builds AI-driven lead generation systems,
            performance marketing platforms, and digital businesses that
            connect customers with trusted companies.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-gold-deep uppercase">
            What We Do
          </p>
          <h2 className="mt-4 font-serif-display text-3xl text-black md:text-4xl">
            AI, software, and growth &mdash; under one roof.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            We operate across five verticals &mdash; building AI products,
            software platforms, and performance marketing systems designed
            to generate measurable growth.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center md:px-10">
          <h2 className="max-w-xl font-serif-display text-3xl text-white md:text-4xl">
            Have a company, product, or idea worth building?
          </h2>
          <Button href="/contact" variant="gold">
            Start a Conversation
          </Button>
        </div>
      </section>
    </>
  );
}
