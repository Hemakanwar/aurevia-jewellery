import { CategoryCard } from "@/components/ui/CategoryCard";
import { ringCategories } from "@/data/ringCategories";

export const metadata = {
  title: "Rings | Aurevia Jewellery",
  description: "Discover our premium collection of Indian rings.",
};

export default function RingsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-serif text-foreground">Ring Categories</h2>
        <span className="text-sm text-muted-foreground">{ringCategories.length} categories</span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {ringCategories.map((cat) => (
          <CategoryCard 
            key={cat.id} 
            title={cat.name} 
            image={cat.image} 
            href={cat.href} 
          />
        ))}
      </div>
    </div>
  );
}
