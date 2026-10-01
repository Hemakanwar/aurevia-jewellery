"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface CategoryCardProps {
  title: string;
  image: string;
  href: string;
}

export function CategoryCard({ title, image, href }: CategoryCardProps) {
  const [error, setError] = useState(false);

  return (
    <Link href={href} className="group flex flex-col rounded-xl overflow-hidden bg-background shadow-sm border border-border/50 transition-transform hover:-translate-y-1">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF5F0]">
        {!error ? (
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => {
              console.error(`Failed to load image: ${image}`);
              setError(true);
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-xs uppercase tracking-widest font-semibold">
            {title}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between p-4">
        <span className="text-xs font-semibold tracking-widest uppercase">{title}</span>
        <div className="h-6 w-6 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
          <ChevronRight className="h-3 w-3" />
        </div>
      </div>
    </Link>
  );
}
