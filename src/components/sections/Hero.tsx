"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Hero() {
  const [error, setError] = useState(false);

  return (
    <section className="relative w-full bg-[#FAF5F0] overflow-hidden">
      {/* Container to handle the split layout and max width */}
      <div className="container mx-auto px-4 lg:px-8 relative min-h-[70vh] flex flex-col md:flex-row items-center pt-12 md:pt-0 pb-32 md:pb-24">
        
        {/* Left Content (~45%) */}
        <div className="w-full md:w-[45%] relative z-10 flex flex-col justify-center space-y-6 pt-10 md:pt-0 pb-10 md:pb-0">
          <div className="flex items-center gap-4">
            <span className="w-10 h-[1px] bg-foreground/40"></span>
            <p className="text-[0.65rem] md:text-xs tracking-[0.2em] uppercase text-foreground/70 font-semibold">
              New Collection 2026
            </p>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-serif leading-[1.1] text-foreground">
            Find Your <br />
            Signature Sparkle
          </h1>
          
          <p className="text-lg text-foreground/80 font-light max-w-md">
            Discover jewellery made for every celebration.
          </p>
          
          <div className="pt-2">
            <Button size="lg" className="rounded-none bg-[#4A1B22] hover:bg-[#3A151A] text-white tracking-wider uppercase text-xs px-8 py-6 group border-none">
              Shop Collections 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>
        </div>

        {/* Right Content Image (~55%) */}
        <div className="w-full md:w-[55%] h-[300px] md:h-full md:absolute md:top-0 md:right-8 lg:right-16 md:bottom-0 flex items-center justify-end z-0">
          <div className="relative w-full h-full max-h-[80%] max-w-[800px] flex items-center justify-end">
            {!error ? (
              <Image
                src="/aurevia-jewellery/images/hero/jewellery-hero.jpg"
                alt="Premium Jewellery Collection"
                fill
                className="object-contain object-right"
                priority
                onError={() => {
                  console.error("Failed to load hero image");
                  setError(true);
                }}
              />
            ) : (
              <div className="w-full h-full border border-border/20 rounded-full bg-background/50 flex items-center justify-center text-muted-foreground/30 text-sm uppercase tracking-widest">
                Aurevia Collection
              </div>
            )}
          </div>
        </div>

        {/* Far Right Vertical Text Ornament */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-4 text-foreground/60 absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <div className="mb-2">
            {/* Small floral/ornament icon placeholder */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-5 w-5">
               <path d="M12 2C12 2 15 6 15 10C15 14 12 18 12 18C12 18 9 14 9 10C9 6 12 2 12 2Z" fill="currentColor" fillOpacity="0.1"/>
            </svg>
          </div>
          <div className="[writing-mode:vertical-rl] text-[0.55rem] tracking-[0.3em] uppercase text-center flex flex-row items-center gap-3 rotate-180">
            <span>TRADITION</span>
            <span>MEETS</span>
            <span>MODERN</span>
            <span>ELEGANCE</span>
          </div>
          <div className="mt-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-5 w-5">
               <path d="M12 2C12 2 15 6 15 10C15 14 12 18 12 18C12 18 9 14 9 10C9 6 12 2 12 2Z" fill="currentColor" fillOpacity="0.1" className="rotate-180"/>
            </svg>
          </div>
        </div>
        
      </div>
    </section>
  );
}
