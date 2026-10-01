export interface BangleCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  href: string;
  description: string;
}

export const bangleCategories: BangleCategory[] = [
  { id: "bg-1", name: "Gold Bangles", slug: "gold", image: "/images/bangles/gold.jpg", href: "/collections/bangles/gold", description: "Traditional polished gold bangles with detailed engraving." },
  { id: "bg-2", name: "Kundan Bangles", slug: "kundan", image: "/images/bangles/kundan.jpg", href: "/collections/bangles/kundan", description: "Gold bangles with Kundan stones and white gemstone details." },
  { id: "bg-3", name: "Polki Bangles", slug: "polki", image: "/images/bangles/polki.jpg", href: "/collections/bangles/polki", description: "Polki-inspired gold bangles with uncut-diamond style stones." },
  { id: "bg-4", name: "Diamond Bangles", slug: "diamond", image: "/images/bangles/diamond.jpg", href: "/collections/bangles/diamond", description: "Elegant contemporary gold and diamond-style bangle." },
  { id: "bg-5", name: "Bridal Bangles", slug: "bridal", image: "/images/bangles/bridal.jpg", href: "/collections/bangles/bridal", description: "Rich Indian bridal bangle stack with gold, Kundan, ruby and emerald accents." },
  { id: "bg-6", name: "Kada Bangles", slug: "kada", image: "/images/bangles/kada.jpg", href: "/collections/bangles/kada", description: "Wide statement gold Kada with intricate traditional motifs." },
  { id: "bg-7", name: "Antique Bangles", slug: "antique", image: "/images/bangles/antique.jpg", href: "/collections/bangles/antique", description: "Antique-finish Indian gold bangle." },
  { id: "bg-8", name: "Temple Bangles", slug: "temple", image: "/images/bangles/temple.jpg", href: "/collections/bangles/temple", description: "Temple-inspired gold bangle with traditional motifs." },
  { id: "bg-9", name: "Gemstone Bangles", slug: "gemstone", image: "/images/bangles/gemstone.jpg", href: "/collections/bangles/gemstone", description: "Gold bangle with emerald/ruby gemstone details." },
  { id: "bg-10", name: "Daily Wear Bangles", slug: "daily-wear", image: "/images/bangles/daily-wear.jpg", href: "/collections/bangles/daily-wear", description: "Minimal elegant gold bangle." },
  { id: "bg-11", name: "Designer Bangles", slug: "designer", image: "/images/bangles/designer.jpg", href: "/collections/bangles/designer", description: "Modern luxury statement bangle." },
];
