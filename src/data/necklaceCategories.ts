export interface NecklaceCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  href: string;
}

export const necklaceCategories: NecklaceCategory[] = [
  { id: "nk-1", name: "Kundan Necklaces", slug: "kundan", image: "/images/necklaces/kundan.jpg", href: "/collections/necklaces/kundan" },
  { id: "nk-2", name: "Polki Necklaces", slug: "polki", image: "/images/necklaces/polki.jpg", href: "/collections/necklaces/polki" },
  { id: "nk-3", name: "Temple Necklaces", slug: "temple", image: "/images/necklaces/temple.jpg", href: "/collections/necklaces/temple" },
  { id: "nk-4", name: "Pearl Necklaces", slug: "pearl", image: "/images/necklaces/pearl.jpg", href: "/collections/necklaces/pearl" },
  { id: "nk-5", name: "Diamond Necklaces", slug: "diamond", image: "/images/necklaces/diamond.jpg", href: "/collections/necklaces/diamond" },
  { id: "nk-6", name: "Gold Necklaces", slug: "gold", image: "/images/necklaces/gold.jpg", href: "/collections/necklaces/gold" },
  { id: "nk-7", name: "Choker Necklaces", slug: "choker", image: "/images/necklaces/choker.jpg", href: "/collections/necklaces/choker" },
  { id: "nk-8", name: "Layered Necklaces", slug: "layered", image: "/images/necklaces/layered.jpg", href: "/collections/necklaces/layered" },
  { id: "nk-9", name: "Long Necklaces", slug: "long", image: "/images/necklaces/long.jpg", href: "/collections/necklaces/long" },
  { id: "nk-10", name: "Coin Necklaces", slug: "coin", image: "/images/necklaces/coin.jpg", href: "/collections/necklaces/coin" },
];
