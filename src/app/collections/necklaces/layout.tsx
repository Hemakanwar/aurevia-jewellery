import { CategoryHero } from "@/components/category/CategoryHero";
import { FilterSidebar } from "@/components/category/CategorySidebar";
import { necklaceCategories } from "@/data/necklaceCategories";

export default function NecklacesLayout({ children }: { children: React.ReactNode }) {
  const sidebarCategories = necklaceCategories.map(c => ({
    name: c.name,
    href: c.href
  }));

  return (
    <main className="min-h-screen bg-background pb-20">
      <CategoryHero 
        title="Necklaces"
        description="From everyday elegance to grand celebrations, discover necklaces for every occasion."
        image="/images/necklaces/gold.jpg" // Using gold necklace as a premium fallback hero
        breadcrumbBase="Home"
        breadcrumbBaseHref="/"
        breadcrumbCurrent="Necklaces"
      />
      
      <div className="container mx-auto px-4 lg:px-8 mt-12 md:mt-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-[22%] shrink-0">
            <FilterSidebar 
              baseCategory="All Necklaces"
              baseHref="/collections/necklaces"
              categories={sidebarCategories}
            />
          </aside>
          
          {/* Main Content Area */}
          <div className="w-full lg:w-[78%]">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
