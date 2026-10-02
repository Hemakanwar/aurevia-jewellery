import { CategoryHero } from "@/components/category/CategoryHero";
import { FilterSidebar } from "@/components/category/CategorySidebar";
import { ringCategories } from "@/data/ringCategories";

export default function RingsLayout({ children }: { children: React.ReactNode }) {
  const sidebarCategories = ringCategories.map(c => ({
    name: c.name,
    href: c.href
  }));

  return (
    <main className="min-h-screen bg-background pb-20">
      <CategoryHero 
        title="Rings"
        description="From timeless classics to modern statements, discover rings for every moment."
        image="/aurevia-jewellery/images/rings/rings-hero.jpg"
        breadcrumbBase="Home"
        breadcrumbBaseHref="/"
        breadcrumbCurrent="Rings"
      />
      
      <div className="container mx-auto px-4 lg:px-8 mt-12 md:mt-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-[22%] shrink-0">
            <FilterSidebar 
              baseCategory="All Rings"
              baseHref="/collections/rings"
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
