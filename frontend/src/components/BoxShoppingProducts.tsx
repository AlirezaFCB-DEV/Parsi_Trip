"use client";

import useBoxShoppingProductOne from "@/services/Box-shopping-products/Box-shopping-product-one/hook";
import IboxShoppingProduct from "@/services/Box-shopping-products/types";
import useBoxShoppingProductTwo from "@/services/Box-shopping-products/Box-shopping-product-two/hook";
import useBoxShoppingProductThree from "@/services/Box-shopping-products/Box-shopping-product-three/hook";
import useBoxShoppingProductFour from "@/services/Box-shopping-products/Box-shopping-product-four/hook";
import DesktopBoxShoppingProduct from "./DesktopBoxShoppingProduct";
import MobileBoxShoppingProduct from "./MobileBoxShoppingProduct";
import MobileShoppingGiftCard from "./MobileShoppingGiftCard";
import useMobileGiftCards from "@/services/Mobile-Gift-Cards/hook";
import IgiftCarditem from "@/services/Mobile-Gift-Cards/types";
import NewCustomer from "./NewCustomer";

function BoxShoppingProducts() {
  const { data: dataOne = [] } = useBoxShoppingProductOne();
  const { data: dataTwo = [] } = useBoxShoppingProductTwo();
  const { data: dataThree = [] } = useBoxShoppingProductThree();
  const { data: dataFour = [] } = useBoxShoppingProductFour();
  const { data: giftCardsData = [] } = useMobileGiftCards();

  return (
    <div>
      <section className="hidden xl:flex flex-col justify-between items-center">
        <div className="w-9/11 h-100 hidden xl:flex justify-between items-center gap-5 container p-5  mx-auto -translate-y-50">
          {dataOne.map((item: IboxShoppingProduct) => (
            <DesktopBoxShoppingProduct key={item.id} {...item} />
          ))}
        </div>

        <div className="w-9/11 h-100 hidden xl:flex justify-between items-center gap-5 container p-5  mx-auto -translate-y-50">
          {dataTwo.map((item: IboxShoppingProduct) => (
            <DesktopBoxShoppingProduct key={item.id} {...item} />
          ))}
        </div>

        <div className="w-9/11 h-100 hidden xl:flex justify-between items-center gap-5 container p-5  mx-auto -translate-y-50">
          {dataThree.map((item: IboxShoppingProduct) => (
            <DesktopBoxShoppingProduct key={item.id} {...item} />
          ))}
        </div>

        <div className="w-9/11 h-100 hidden xl:flex justify-between items-center gap-5 container p-5  mx-auto -translate-y-50">
          {dataFour.map((item: IboxShoppingProduct) => (
            <DesktopBoxShoppingProduct key={item.id} {...item} />
          ))}
        </div>

      </section>
        <div className="hidden lg:block w-9/11 mx-auto container">
            <NewCustomer />
          </div>

      <section className="xl:hidden flex flex-col justify-between items-center">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
          <div className="lg:hidden">
            <NewCustomer />
          </div>
          {dataOne.map((item: IboxShoppingProduct) => (
            <MobileBoxShoppingProduct key={item.id} {...item} />
          ))}
          <MobileBoxShoppingProduct {...dataTwo[0]} />
          <MobileBoxShoppingProduct {...dataTwo[1]} />
          <MobileBoxShoppingProduct {...dataTwo[2]} />
          <div className="lg:hidden grid gap-5">
            {giftCardsData.map((item: IgiftCarditem) => (
              <MobileShoppingGiftCard key={item.id} {...item} />
            ))}

            <MobileBoxShoppingProduct {...dataTwo[3]} />
          </div>
          ``
        </div>
      </section>
    </div>
  );
}

export default BoxShoppingProducts;
