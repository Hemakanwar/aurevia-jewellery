export interface EarringCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  href: string;
  description: string;
}

export const earringCategories: EarringCategory[] = [
  { id: "eg-1", name: "Jhumka Earrings", slug: "jhumka", image: "/images/earrings/jhumka.jpg", href: "/collections/earrings/jhumka", description: "Traditional Indian gold Jhumka with Kundan stones, emerald accents and pearl drops." },
  { id: "eg-2", name: "Stud Earrings", slug: "stud", image: "/images/earrings/stud.jpg", href: "/collections/earrings/stud", description: "Elegant floral gold stud earrings with white stones and ruby/pink center stones." },
  { id: "eg-3", name: "Hoop Earrings", slug: "hoop", image: "/images/earrings/hoop.jpg", href: "/collections/earrings/hoop", description: "Modern gold hoops with diamond/Kundan-style detailing." },
  { id: "eg-4", name: "Kundan Earrings", slug: "kundan", image: "/images/earrings/kundan.jpg", href: "/collections/earrings/kundan", description: "Traditional Kundan earrings with emerald and white stone details." },
  { id: "eg-5", name: "Polki Earrings", slug: "polki", image: "/images/earrings/polki.jpg", href: "/collections/earrings/polki", description: "Polki-inspired earrings with uncut-diamond style stones." },
  { id: "eg-6", name: "Temple Earrings", slug: "temple", image: "/images/earrings/temple.jpg", href: "/collections/earrings/temple", description: "Traditional South Indian temple-inspired gold earrings." },
  { id: "eg-7", name: "Pearl Earrings", slug: "pearl", image: "/images/earrings/pearl.jpg", href: "/collections/earrings/pearl", description: "Elegant gold earrings with large pearl drops." },
  { id: "eg-8", name: "Diamond Earrings", slug: "diamond", image: "/images/earrings/diamond.jpg", href: "/collections/earrings/diamond", description: "Contemporary diamond-style drop earrings." },
  { id: "eg-9", name: "Drop Earrings", slug: "drop", image: "/images/earrings/drop.jpg", href: "/collections/earrings/drop", description: "Elegant teardrop earrings with white stones." },
  { id: "eg-10", name: "Chandelier Earrings", slug: "chandelier", image: "/images/earrings/chandelier.jpg", href: "/collections/earrings/chandelier", description: "Long luxurious chandelier earrings with Kundan, emerald and pearl details." },
  { id: "eg-11", name: "Ear Cuffs", slug: "ear-cuffs", image: "/images/earrings/ear-cuffs.jpg", href: "/collections/earrings/ear-cuffs", description: "Modern gold ear cuff with delicate gemstone detailing." },
];
