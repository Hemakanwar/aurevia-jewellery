import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export function NewArrivals() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-3xl md:text-4xl font-serif">New Arrivals</h2>
            <div className="h-px w-12 bg-border hidden md:block"></div>
          </div>
          <p className="text-sm text-muted-foreground font-light">Fresh designs for your special moments.</p>
        </div>
        <a href="#" className="text-xs font-semibold tracking-widest uppercase hover:text-primary transition-colors flex items-center gap-2 group">
          View All <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} title={p.name} price={p.price} image={p.image} isNew={p.badge === "NEW"} href={`/product/${p.slug}`} />
        ))}
      </div>
    </section>
  );
}
