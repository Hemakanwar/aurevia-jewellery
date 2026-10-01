import Link from "next/link";
import { Search, User, Heart, ShoppingBag, ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center justify-center -space-y-1">
          <div className="text-secondary mb-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
              <path d="M12 2C12 2 15 6 15 10C15 14 12 18 12 18C12 18 9 14 9 10C9 6 12 2 12 2Z" fill="currentColor" fillOpacity="0.2"/>
              <path d="M12 18C12 18 16 22 20 22C24 22 24 18 24 18C24 18 20 14 16 14C12 14 12 18 12 18Z" fill="currentColor" fillOpacity="0.2"/>
              <path d="M12 18C12 18 8 22 4 22C0 22 0 18 0 18C0 18 4 14 8 14C12 14 12 18 12 18Z" fill="currentColor" fillOpacity="0.2"/>
            </svg>
          </div>
          <span className="font-serif text-2xl lg:text-3xl tracking-widest text-primary uppercase">Aurevia</span>
          <span className="text-[0.55rem] uppercase tracking-[0.2em] text-muted-foreground mt-1">Jewellery</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <Link href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
            Shop <ChevronDown className="h-3 w-3" />
          </Link>
          <Link href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
            Collections <ChevronDown className="h-3 w-3" />
          </Link>
          <Link href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
            Bridal <ChevronDown className="h-3 w-3" />
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            New Arrivals
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="hidden xl:flex items-center relative">
            <input 
              type="text" 
              placeholder="Search for jewellery..." 
              className="pl-4 pr-10 py-1.5 w-64 rounded-full border border-border bg-transparent text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <Search className="h-4 w-4 absolute right-3 text-muted-foreground" />
          </div>
          <button className="xl:hidden hover:text-primary transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="hover:text-primary transition-colors">
            <User className="h-5 w-5" />
          </button>
          <button className="hover:text-primary transition-colors">
            <Heart className="h-5 w-5" />
          </button>
          <button className="relative hover:text-primary transition-colors">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-[#4A1B22] text-white text-[0.6rem] font-bold h-4 w-4 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
        </div>
        
      </div>
    </header>
  );
}
