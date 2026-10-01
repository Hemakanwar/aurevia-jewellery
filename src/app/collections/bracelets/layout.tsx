import { CategoryHero } from "@/components/category/CategoryHero";
import { FilterSidebar } from "@/components/category/CategorySidebar";
import { braceletCategories } from "@/data/braceletCategories";

export default function BraceletsLayout({ children }: { children: React.ReactNode }) {
  const sidebarCategories = braceletCategories.map(c => ({
    name: c.name,
    href: c.href
  }));

  return (
    <main className="min-h-screen bg-background pb-20">
      <CategoryHero 
        title="Bracelets"
        description="From delicate everyday styles to statement pieces, discover bracelets for every occasion."
        image="/images/bracelets/bracelets-hero.jpg"
        breadcrumbBase="Home"
        breadcrumbBaseHref="/"
        breadcrumbCurrent="Bracelets"
      />
      
      <div className="container mx-auto px-4 lg:px-8 mt-12 md:mt-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-[22%] shrink-0">
            <FilterSidebar 
              baseCategory="All Bracelets"
              baseHref="/collections/bracelets"
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
