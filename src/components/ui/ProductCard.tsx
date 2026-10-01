"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  isNew?: boolean;
  href: string;
}

export function ProductCard({ title, price, image, isNew, href }: ProductCardProps) {
  const [error, setError] = useState(false);

  return (
    <div className="group flex flex-col gap-3">
      <Link href={href} className="relative aspect-[3/2] w-full overflow-hidden rounded-md bg-[#FAF5F0] border border-border/40">
        {isNew && (
          <div className="absolute top-3 left-3 z-10 bg-background px-2 py-1 text-[0.65rem] font-bold tracking-wider uppercase rounded shadow-sm text-foreground/80">
            NEW
          </div>
        )}
        {!error ? (
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => {
              console.error(`Failed to load product image: ${image}`);
              setError(true);
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-[0.65rem] uppercase tracking-widest font-semibold px-4 text-center">
            {title}
          </div>
        )}
      </Link>
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <Link href={href} className="text-sm font-medium hover:text-primary transition-colors">
            {title}
          </Link>
          <span className="text-sm text-foreground/80 font-semibold">{price}</span>
        </div>
        <button className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shrink-0">
          <ShoppingCart className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
