import { CategoryHero } from "@/components/category/CategoryHero";
import { FilterSidebar } from "@/components/category/CategorySidebar";
import { earringCategories } from "@/data/earringCategories";

export default function EarringsLayout({ children }: { children: React.ReactNode }) {
  const sidebarCategories = earringCategories.map(c => ({
    name: c.name,
    href: c.href
  }));

  return (
    <main className="min-h-screen bg-background pb-20">
      <CategoryHero 
        title="Earrings"
        description="From everyday elegance to statement pieces, discover earrings for every occasion."
        image="/aurevia-jewellery/images/earrings/earrings-hero.jpg"
        breadcrumbBase="Home"
        breadcrumbBaseHref="/"
        breadcrumbCurrent="Earrings"
      />
      
      <div className="container mx-auto px-4 lg:px-8 mt-12 md:mt-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-[22%] shrink-0">
            <FilterSidebar 
              baseCategory="All Earrings"
              baseHref="/collections/earrings"
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
