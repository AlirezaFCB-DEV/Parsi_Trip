import BoxShoppingProducts from "@/components/BoxShoppingProducts";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <section>
        <Slider />
      </section>

      <section>
        <BoxShoppingProducts />
      </section>
    </>
  );
}
