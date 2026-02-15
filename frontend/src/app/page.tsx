import BoxShoppingProducts from "@/components/BoxShoppingProducts";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import HomePageFooter from "@/components/homePageFooter";

export default function Home() {
  return (
    <main className="bg-gray-200">
      <header id="topItem">
        <Header />
      </header>

      <section>
        <Slider />
      </section>

      <section>
        <BoxShoppingProducts />
      </section>

      <footer className="w-full mt-15 flex flex-col justify-between items-center bg-gray-800 text-white">
        <HomePageFooter />
      </footer>
    </main>
  );
}
