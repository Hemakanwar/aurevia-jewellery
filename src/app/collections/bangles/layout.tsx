import { CategoryHero } from "@/components/category/CategoryHero";
import { FilterSidebar } from "@/components/category/CategorySidebar";
import { bangleCategories } from "@/data/bangleCategories";

export default function BanglesLayout({ children }: { children: React.ReactNode }) {
  const sidebarCategories = bangleCategories.map(c => ({
    name: c.name,
    href: c.href
  }));

  return (
    <main className="min-h-screen bg-background pb-20">
      <CategoryHero 
        title="Bangles"
        description="From timeless classics to contemporary stacks, discover bangles crafted for every celebration."
        image="/images/bangles/bangles-hero.jpg"
        breadcrumbBase="Home"
        breadcrumbBaseHref="/"
        breadcrumbCurrent="Bangles"
      />
      
      <div className="container mx-auto px-4 lg:px-8 mt-12 md:mt-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-[22%] shrink-0">
            <FilterSidebar 
              baseCategory="All Bangles"
              baseHref="/collections/bangles"
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
