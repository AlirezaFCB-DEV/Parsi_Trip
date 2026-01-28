"use client";

import useBoxShoppingProducts from "@/services/Box-shopping-products/hook";
import BoxShoppingProduct from "./BoxShoppingProduct";
import IboxShoppingProduct from "@/services/Box-shopping-products/types";

function BoxShoppingProducts() {
  const { data = [] } = useBoxShoppingProducts();

  return (
    <div className="w-9/11 h-100 hidden xl:flex justify-between items-center gap-5 container p-5  mx-auto -translate-y-50">
      {data.map((item: IboxShoppingProduct) => (
        <BoxShoppingProduct key={item.id} {...item} />
      ))}
    </div>
  );
}

export default BoxShoppingProducts;
