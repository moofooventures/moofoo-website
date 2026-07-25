import type { Category } from "@/lib/categories";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="group flex flex-col border border-line p-8 transition-colors hover:border-gold">
      <span className="font-serif-display text-sm text-gold">
        {category.index}
      </span>
      <h3 className="mt-4 font-serif-display text-xl text-ink">
        {category.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {category.description}
      </p>
      <span className="mt-6 inline-flex w-fit items-center gap-2 border border-gold/40 px-3 py-1 text-[11px] tracking-[0.15em] text-gold-deep uppercase">
        Coming Soon
      </span>
    </div>
  );
}
