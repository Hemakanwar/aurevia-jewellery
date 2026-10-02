export interface RingCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  href: string;
  description: string;
}

export const ringCategories: RingCategory[] = [
  { id: "rg-1", name: "Engagement Rings", slug: "engagement", image: "/aurevia-jewellery/images/rings/engagement.jpg", href: "/collections/rings/engagement", description: "Classic gold ring with a large diamond-style center stone." },
  { id: "rg-2", name: "Solitaire Rings", slug: "solitaire", image: "/aurevia-jewellery/images/rings/solitaire.jpg", href: "/collections/rings/solitaire", description: "Minimal elegant solitaire ring." },
  { id: "rg-3", name: "Diamond Rings", slug: "diamond", image: "/aurevia-jewellery/images/rings/diamond.jpg", href: "/collections/rings/diamond", description: "Luxury diamond-style ring with multiple stones." },
  { id: "rg-4", name: "Gemstone Rings", slug: "gemstone", image: "/aurevia-jewellery/images/rings/gemstone.jpg", href: "/collections/rings/gemstone", description: "Gold ring with a rich emerald/ruby gemstone." },
  { id: "rg-5", name: "Gold Rings", slug: "gold", image: "/aurevia-jewellery/images/rings/gold.jpg", href: "/collections/rings/gold", description: "Traditional polished gold ring." },
  { id: "rg-6", name: "Kundan Rings", slug: "kundan", image: "/aurevia-jewellery/images/rings/kundan.jpg", href: "/collections/rings/kundan", description: "Indian Kundan ring with white stones and gold setting." },
  { id: "rg-7", name: "Polki Rings", slug: "polki", image: "/aurevia-jewellery/images/rings/polki.jpg", href: "/collections/rings/polki", description: "Polki-inspired ring with uncut diamond-style stones." },
  { id: "rg-8", name: "Temple Rings", slug: "temple", image: "/aurevia-jewellery/images/rings/temple.jpg", href: "/collections/rings/temple", description: "Traditional Indian temple-inspired gold ring." },
  { id: "rg-9", name: "Band Rings", slug: "band", image: "/aurevia-jewellery/images/rings/band.jpg", href: "/collections/rings/band", description: "Elegant multi-band or stacked gold ring." },
  { id: "rg-10", name: "Cocktail Rings", slug: "cocktail", image: "/aurevia-jewellery/images/rings/cocktail.jpg", href: "/collections/rings/cocktail", description: "Large statement gemstone ring." },
  { id: "rg-11", name: "Adjustable Rings", slug: "adjustable", image: "/aurevia-jewellery/images/rings/adjustable.jpg", href: "/collections/rings/adjustable", description: "Elegant adjustable gold ring." },
];
