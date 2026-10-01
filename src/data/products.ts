export interface Product {
  id: string;
  name: string;
  slug: string;
  image: string;
  price: string;
  category: string;
  badge?: string;
}

export const products: Product[] = [
  { 
    id: "prod-1", 
    name: "Royal Kundan Choker", 
    slug: "royal-kundan-choker", 
    image: "/images/products/royal-kundan-choker.jpg", 
    price: "₹ 8,499", 
    category: "Necklaces", 
    badge: "NEW" 
  },
  { 
    id: "prod-2", 
    name: "Peach Blossom Bangles (Set of 4)", 
    slug: "peach-blossom-bangles", 
    image: "/images/products/peach-blossom-bangles.jpg", 
    price: "₹ 4,299", 
    category: "Bangles", 
    badge: "NEW" 
  },
  { 
    id: "prod-3", 
    name: "Elegant Pearl Jhumkas", 
    slug: "elegant-pearl-jhumkas", 
    image: "/images/products/elegant-pearl-jhumkas.jpg", 
    price: "₹ 2,799", 
    category: "Earrings", 
    badge: "NEW" 
  },
  { 
    id: "prod-4", 
    name: "Emerald Grace Ring", 
    slug: "emerald-grace-ring", 
    image: "/images/products/emerald-grace-ring.jpg", 
    price: "₹ 3,999", 
    category: "Rings", 
    badge: "NEW" 
  }
];
