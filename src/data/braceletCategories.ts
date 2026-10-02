export interface BraceletCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  href: string;
  description: string;
}

export const braceletCategories: BraceletCategory[] = [
  { id: "bc-1", name: "Tennis Bracelets", slug: "tennis", image: "/aurevia-jewellery/images/bracelets/tennis.jpg", href: "/collections/bracelets/tennis", description: "Elegant continuous diamond-style stone bracelet." },
  { id: "bc-2", name: "Bangle Bracelets", slug: "bangle", image: "/aurevia-jewellery/images/bracelets/bangle.jpg", href: "/collections/bracelets/bangle", description: "Gold bangle-style bracelet with traditional detailing." },
  { id: "bc-3", name: "Charm Bracelets", slug: "charm", image: "/aurevia-jewellery/images/bracelets/charm.jpg", href: "/collections/bracelets/charm", description: "Delicate gold bracelet with small gemstone charms." },
  { id: "bc-4", name: "Kundan Bracelets", slug: "kundan", image: "/aurevia-jewellery/images/bracelets/kundan.jpg", href: "/collections/bracelets/kundan", description: "Kundan bracelet with white stones and emerald details." },
  { id: "bc-5", name: "Polki Bracelets", slug: "polki", image: "/aurevia-jewellery/images/bracelets/polki.jpg", href: "/collections/bracelets/polki", description: "Polki-inspired bracelet with uncut diamond-style stones." },
  { id: "bc-6", name: "Diamond Bracelets", slug: "diamond", image: "/aurevia-jewellery/images/bracelets/diamond.jpg", href: "/collections/bracelets/diamond", description: "Luxury diamond-style bracelet with brilliant stones." },
  { id: "bc-7", name: "Gold Bracelets", slug: "gold", image: "/aurevia-jewellery/images/bracelets/gold.jpg", href: "/collections/bracelets/gold", description: "Traditional polished gold bracelet." },
  { id: "bc-8", name: "Gemstone Bracelets", slug: "gemstone", image: "/aurevia-jewellery/images/bracelets/gemstone.jpg", href: "/collections/bracelets/gemstone", description: "Gold bracelet with emerald/ruby gemstone details." },
  { id: "bc-9", name: "Pearl Bracelets", slug: "pearl", image: "/aurevia-jewellery/images/bracelets/pearl.jpg", href: "/collections/bracelets/pearl", description: "Elegant pearl bracelet with gold separators." },
  { id: "bc-10", name: "Chain Bracelets", slug: "chain", image: "/aurevia-jewellery/images/bracelets/chain.jpg", href: "/collections/bracelets/chain", description: "Premium gold chain bracelet." },
  { id: "bc-11", name: "Cuff Bracelets", slug: "cuff", image: "/aurevia-jewellery/images/bracelets/cuff.jpg", href: "/collections/bracelets/cuff", description: "Wide luxury gold cuff with gemstone/leaf detailing." },
];
