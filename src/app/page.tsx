import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { NewArrivals } from "@/components/sections/NewArrivals";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <NewArrivals />
    </>
  );
}
