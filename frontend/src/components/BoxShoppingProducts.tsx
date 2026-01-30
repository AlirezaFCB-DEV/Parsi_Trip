"use client";


import useBoxShoppingProductOne from "@/services/Box-shopping-products/Box-shopping-product-one/hook";
import BoxShoppingProduct from "./BoxShoppingProduct";
import IboxShoppingProduct from "@/services/Box-shopping-products/types";
import useBoxShoppingProductTwo from "@/services/Box-shopping-products/Box-shopping-product-two/hook";

function BoxShoppingProducts() {
  const { data : dataOne = [] } = useBoxShoppingProductOne();
  const { data : dataTwo = [] } = useBoxShoppingProductTwo();

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="w-9/11 h-100 hidden xl:flex justify-between items-center gap-5 container p-5  mx-auto -translate-y-50">
        {dataOne.map((item: IboxShoppingProduct) => (
          <BoxShoppingProduct key={item.id} {...item} />
        ))}
      </div>

      <div className="w-9/11 h-100 hidden xl:flex justify-between items-center gap-5 container p-5  mx-auto -translate-y-50">
        {dataTwo.map((item: IboxShoppingProduct) => (
          <BoxShoppingProduct key={item.id} {...item} />
        ))}
      </div>

      <div className="w-9/11 h-100 hidden xl:flex justify-between items-center gap-5 container p-5  mx-auto -translate-y-50">
        {dataOne.map((item: IboxShoppingProduct) => (
          <BoxShoppingProduct key={item.id} {...item} />
        ))}
      </div>

      <div className="w-9/11 h-100 hidden xl:flex justify-between items-center gap-5 container p-5  mx-auto -translate-y-50">
        {dataOne.map((item: IboxShoppingProduct) => (
          <BoxShoppingProduct key={item.id} {...item} />
        ))}
      </div>

      <div className="w-9/11 h-100 hidden xl:flex justify-between items-center gap-5 container p-5  mx-auto -translate-y-50">
        {dataOne.map((item: IboxShoppingProduct) => (
          <BoxShoppingProduct key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default BoxShoppingProducts;
