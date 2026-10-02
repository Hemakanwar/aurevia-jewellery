import Image from "next/image";
import { ProductCard } from "@/components/ui/ProductCard";
import { braceletCategories } from "@/data/braceletCategories";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

interface SubcategoryPageProps {
  params: {
    subcategory: string;
  };
}

export async function generateMetadata({ params }: SubcategoryPageProps) {
  const p = await params;
  const category = braceletCategories.find((c) => c.slug === p.subcategory);
  
  if (!category) {
    return {
      title: "Not Found | Aurevia Jewellery"
    };
  }

  return {
    title: `${category.name} | Aurevia Jewellery`,
    description: `Shop premium ${category.name} at Aurevia.`,
  };
}

export function generateStaticParams() {
  return braceletCategories.map((cat) => ({
    subcategory: cat.slug,
  }));
}

export default async function SubcategoryPage({ params }: SubcategoryPageProps) {
  const p = await params;
  const category = braceletCategories.find((c) => c.slug === p.subcategory);
  
  if (!category) {
    notFound();
  }

  // Find products that match this category, or just show all for now since we don't have enough product data
  // For dummy purposes, we'll just show the products we have.
  const displayProducts = products;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-serif text-foreground">{category.name}</h2>
        <span className="text-sm text-muted-foreground">{displayProducts.length} products</span>
      </div>
      
      {/* Show the category image as a small banner for the subcategory */}
      <div className="w-full h-[150px] md:h-[200px] relative rounded-xl overflow-hidden mb-8">
        <Image src={category.image} alt={category.name} fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h3 className="text-white text-2xl md:text-4xl font-serif">{category.name}</h3>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {displayProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            title={product.name}
            price={product.price}
            image={product.image}
            isNew={product.badge === "NEW"}
            href={`/products/${product.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
