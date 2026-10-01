import { CategoryHero } from "@/components/category/CategoryHero";
import { FilterSidebar } from "@/components/category/CategorySidebar";
import { bridalCategories } from "@/data/bridalCategories";

export default function BridalLayout({ children }: { children: React.ReactNode }) {
  const sidebarCategories = bridalCategories.map(c => ({
    name: c.name,
    href: c.href
  }));

  return (
    <main className="min-h-screen bg-background pb-20">
      <CategoryHero 
        title="Bridal Sets"
        description="From traditional heirlooms to modern bridal ensembles, discover complete jewellery sets crafted for your special day."
        image="/images/bridal/bridal-hero.jpg"
        breadcrumbBase="Home"
        breadcrumbBaseHref="/"
        breadcrumbCurrent="Bridal Sets"
      />
      
      <div className="container mx-auto px-4 lg:px-8 mt-12 md:mt-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-[22%] shrink-0">
            <FilterSidebar 
              baseCategory="All Bridal Sets"
              baseHref="/collections/bridal"
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
