import { CategoryCard } from "@/components/ui/CategoryCard";
import { categories } from "@/data/categories";

export function Categories() {
  return (
    <section className="relative z-20 container mx-auto px-4 lg:px-8 -mt-16 md:-mt-28">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} title={cat.name} image={cat.image} href={cat.href} />
        ))}
      </div>
    </section>
  );
}
