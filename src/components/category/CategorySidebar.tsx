"use client";

import Link from "next/link";
import { ChevronUp, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface SidebarCategory {
  name: string;
  href: string;
  slug?: string;
}

interface FilterSidebarProps {
  baseCategory: string;
  baseHref: string;
  categories: SidebarCategory[];
}

export function FilterSidebar({ baseCategory, baseHref, categories }: FilterSidebarProps) {
  const pathname = usePathname();
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [filterOpen, setFilterOpen] = useState(true);

  // Helper to check if a link is active
  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="w-full">
      {/* Categories Section */}
      <div className="mb-8">
        <button 
          onClick={() => setCategoriesOpen(!categoriesOpen)}
          className="w-full flex items-center justify-between py-2 text-sm font-bold tracking-widest uppercase mb-2"
        >
          CATEGORIES
          {categoriesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        
        {categoriesOpen && (
          <div className="flex flex-col space-y-1">
            <Link 
              href={baseHref} 
              className={`flex items-center justify-between px-3 py-2.5 text-sm rounded-md transition-colors ${isActive(baseHref) ? 'bg-[#FAF5F0] text-primary font-medium' : 'text-muted-foreground hover:bg-muted/50'}`}
            >
              <span>{baseCategory}</span>
              {isActive(baseHref) && <ChevronRight className="h-3.5 w-3.5 text-primary" />}
            </Link>
            
            {categories.map((cat) => (
              <Link 
                key={cat.name} 
                href={cat.href}
                className={`flex items-center justify-between px-3 py-2.5 text-sm rounded-md transition-colors ${isActive(cat.href) ? 'bg-[#FAF5F0] text-primary font-medium' : 'text-muted-foreground hover:bg-muted/50'}`}
              >
                <span>{cat.name}</span>
                {isActive(cat.href) && <ChevronRight className="h-3.5 w-3.5 text-primary" />}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Filter Section */}
      <div>
        <button 
          onClick={() => setFilterOpen(!filterOpen)}
          className="w-full flex items-center justify-between py-2 text-sm font-bold tracking-widest uppercase mb-4"
        >
          FILTER BY
          {filterOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        
        {filterOpen && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-semibold mb-4">Price Range</h4>
              <div className="px-2">
                <div className="h-1 w-full bg-border rounded-full relative">
                  <div className="absolute left-0 right-0 h-full bg-[#4A1B22] rounded-full"></div>
                  <div className="absolute -left-2 -top-1.5 h-4 w-4 rounded-full bg-[#4A1B22]"></div>
                  <div className="absolute -right-2 -top-1.5 h-4 w-4 rounded-full bg-[#4A1B22]"></div>
                </div>
                <div className="flex justify-between items-center mt-4 text-xs text-muted-foreground">
                  <span>₹ 0</span>
                  <span>—</span>
                  <span>₹ 5,00,000</span>
                </div>
              </div>
            </div>
            
            {/* Material Filter */}
            <div>
              <h4 className="text-xs font-semibold mb-4">Material</h4>
              <div className="space-y-3">
                {["Gold", "Diamond", "Silver", "Gemstone", "Kundan", "Polki"].map(mat => (
                  <label key={mat} className="flex items-center gap-3 cursor-pointer">
                    <div className="h-4 w-4 rounded border border-border flex items-center justify-center"></div>
                    <span className="text-sm text-muted-foreground">{mat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Stone Filter */}
            <div>
              <h4 className="text-xs font-semibold mb-4">Stone</h4>
              <div className="space-y-3">
                {["Diamond", "Emerald", "Ruby", "Pearl"].map(stone => (
                  <label key={stone} className="flex items-center gap-3 cursor-pointer">
                    <div className="h-4 w-4 rounded border border-border flex items-center justify-center"></div>
                    <span className="text-sm text-muted-foreground">{stone}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Style Filter */}
            <div>
              <h4 className="text-xs font-semibold mb-4">Style</h4>
              <div className="space-y-3">
                {["Traditional", "Contemporary", "Bridal", "Daily Wear"].map(style => (
                  <label key={style} className="flex items-center gap-3 cursor-pointer">
                    <div className="h-4 w-4 rounded border border-border flex items-center justify-center"></div>
                    <span className="text-sm text-muted-foreground">{style}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability Filter */}
            <div>
              <h4 className="text-xs font-semibold mb-4">Availability</h4>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="h-4 w-4 rounded border border-border flex items-center justify-center">
                    <div className="h-2 w-2 bg-[#4A1B22] rounded-sm"></div>
                  </div>
                  <span className="text-sm text-foreground font-medium">In Stock</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="h-4 w-4 rounded border border-border flex items-center justify-center"></div>
                  <span className="text-sm text-muted-foreground">Made to Order</span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
