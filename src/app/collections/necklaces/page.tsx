import { CategoryCard } from "@/components/ui/CategoryCard";
import { necklaceCategories } from "@/data/necklaceCategories";

export const metadata = {
  title: "Necklaces | Aurevia Jewellery",
  description: "Discover our premium collection of Indian necklaces.",
};

export default function NecklacesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-serif text-foreground">Necklace Categories</h2>
        <span className="text-sm text-muted-foreground">{necklaceCategories.length} categories</span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {necklaceCategories.map((cat) => (
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
