import BoxShoppingProducts from "@/components/BoxShoppingProducts";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="bg-yellow-50">
      <section>
        <Slider />
      </section>

      <section>
        <BoxShoppingProducts />
      </section>
    </main>
  );
}
