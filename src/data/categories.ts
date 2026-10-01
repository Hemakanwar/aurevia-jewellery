export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  href: string;
}

export const categories: Category[] = [
  { id: "cat-1", name: "Necklaces", slug: "necklaces", image: "/images/categories/necklaces.jpg", href: "/collections/necklaces" },
  { id: "cat-2", name: "Bangles", slug: "bangles", image: "/images/categories/bangles.jpg", href: "/collections/bangles" },
  { id: "cat-3", name: "Earrings", slug: "earrings", image: "/images/categories/earrings.jpg", href: "/collections/earrings" },
  { id: "cat-4", name: "Rings", slug: "rings", image: "/images/categories/rings.jpg", href: "/collections/rings" },
  { id: "cat-5", name: "Bracelets", slug: "bracelets", image: "/images/categories/bracelets.jpg", href: "/collections/bracelets" },
  { id: "cat-6", name: "Bridal Sets", slug: "bridal-sets", image: "/images/categories/bridal.jpg", href: "/collections/bridal" },
];
