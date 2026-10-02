export interface BridalCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  href: string;
  description: string;
}

export const bridalCategories: BridalCategory[] = [
  { id: "br-1", name: "Necklace Sets", slug: "necklace-sets", image: "/aurevia-jewellery/images/bridal/necklace-sets.jpg", href: "/collections/bridal/necklace-sets", description: "Complete matching necklace and earring sets." },
  { id: "br-2", name: "Choker Sets", slug: "choker-sets", image: "/aurevia-jewellery/images/bridal/choker-sets.jpg", href: "/collections/bridal/choker-sets", description: "Bridal choker sets with complementary earrings." },
  { id: "br-3", name: "Rani Haar Sets", slug: "rani-haar-sets", image: "/aurevia-jewellery/images/bridal/rani-haar-sets.jpg", href: "/collections/bridal/rani-haar-sets", description: "Long layered Rani Haar sets for regal elegance." },
  { id: "br-4", name: "Temple Sets", slug: "temple-sets", image: "/aurevia-jewellery/images/bridal/temple-sets.jpg", href: "/collections/bridal/temple-sets", description: "Traditional South Indian temple jewellery sets." },
  { id: "br-5", name: "Kundan Sets", slug: "kundan-sets", image: "/aurevia-jewellery/images/bridal/kundan-sets.jpg", href: "/collections/bridal/kundan-sets", description: "Classic Kundan bridal sets with emerald and ruby drops." },
  { id: "br-6", name: "Polki Sets", slug: "polki-sets", image: "/aurevia-jewellery/images/bridal/polki-sets.jpg", href: "/collections/bridal/polki-sets", description: "Polki uncut diamond-style sets for luxury brides." },
  { id: "br-7", name: "Diamond Sets", slug: "diamond-sets", image: "/aurevia-jewellery/images/bridal/diamond-sets.jpg", href: "/collections/bridal/diamond-sets", description: "Contemporary brilliant diamond-style bridal sets." },
  { id: "br-8", name: "Gold Sets", slug: "gold-sets", image: "/aurevia-jewellery/images/bridal/gold-sets.jpg", href: "/collections/bridal/gold-sets", description: "Traditional heavy gold bridal sets." },
  { id: "br-9", name: "Gemstone Sets", slug: "gemstone-sets", image: "/aurevia-jewellery/images/bridal/gemstone-sets.jpg", href: "/collections/bridal/gemstone-sets", description: "Bridal sets highlighting premium gemstone pieces." },
  { id: "br-10", name: "Traditional Sets", slug: "traditional-sets", image: "/aurevia-jewellery/images/bridal/traditional-sets.jpg", href: "/collections/bridal/traditional-sets", description: "Authentic traditional Indian bridal sets." },
  { id: "br-11", name: "Modern Bridal Sets", slug: "modern-bridal-sets", image: "/aurevia-jewellery/images/bridal/modern-bridal-sets.jpg", href: "/collections/bridal/modern-bridal-sets", description: "Contemporary sets for the modern bride." },
];
