export interface NecklaceCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  href: string;
}

export const necklaceCategories: NecklaceCategory[] = [
  { id: "nk-1", name: "Kundan Necklaces", slug: "kundan", image: "/aurevia-jewellery/images/necklaces/kundan.jpg", href: "/collections/necklaces/kundan" },
  { id: "nk-2", name: "Polki Necklaces", slug: "polki", image: "/aurevia-jewellery/images/necklaces/polki.jpg", href: "/collections/necklaces/polki" },
  { id: "nk-3", name: "Temple Necklaces", slug: "temple", image: "/aurevia-jewellery/images/necklaces/temple.jpg", href: "/collections/necklaces/temple" },
  { id: "nk-4", name: "Pearl Necklaces", slug: "pearl", image: "/aurevia-jewellery/images/necklaces/pearl.jpg", href: "/collections/necklaces/pearl" },
  { id: "nk-5", name: "Diamond Necklaces", slug: "diamond", image: "/aurevia-jewellery/images/necklaces/diamond.jpg", href: "/collections/necklaces/diamond" },
  { id: "nk-6", name: "Gold Necklaces", slug: "gold", image: "/aurevia-jewellery/images/necklaces/gold.jpg", href: "/collections/necklaces/gold" },
  { id: "nk-7", name: "Choker Necklaces", slug: "choker", image: "/aurevia-jewellery/images/necklaces/choker.jpg", href: "/collections/necklaces/choker" },
  { id: "nk-8", name: "Layered Necklaces", slug: "layered", image: "/aurevia-jewellery/images/necklaces/layered.jpg", href: "/collections/necklaces/layered" },
  { id: "nk-9", name: "Long Necklaces", slug: "long", image: "/aurevia-jewellery/images/necklaces/long.jpg", href: "/collections/necklaces/long" },
  { id: "nk-10", name: "Coin Necklaces", slug: "coin", image: "/aurevia-jewellery/images/necklaces/coin.jpg", href: "/collections/necklaces/coin" },
];
