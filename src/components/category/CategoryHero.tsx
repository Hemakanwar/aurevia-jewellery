import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CategoryHeroProps {
  title: string;
  description: string;
  image: string;
  breadcrumbBase: string;
  breadcrumbBaseHref: string;
  breadcrumbCurrent: string;
}

export function CategoryHero({ title, description, image, breadcrumbBase, breadcrumbBaseHref, breadcrumbCurrent }: CategoryHeroProps) {
  return (
    <div className="w-full bg-[#FAF5F0]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 py-4 text-xs tracking-wider text-muted-foreground uppercase font-semibold">
          <Link href={breadcrumbBaseHref} className="hover:text-primary transition-colors">{breadcrumbBase}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{breadcrumbCurrent}</span>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col md:flex-row items-center py-12 md:py-16 gap-8 md:gap-4">
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
            <h1 className="text-5xl md:text-6xl font-serif text-foreground">{title}</h1>
            <p className="text-base text-foreground/70 max-w-sm leading-relaxed">
              {description}
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[250px] md:h-[350px]">
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
