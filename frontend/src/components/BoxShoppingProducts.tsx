import BoxShoppingProduct from "./BoxShoppingProduct";

function BoxShoppingProducts() {
  return (
    <div className="w-8/10 h-100 hidden xl:flex justify-between items-center gap-5 container p-5  mx-auto -translate-y-50">
      <BoxShoppingProduct />
      <BoxShoppingProduct />
      <BoxShoppingProduct />
      <BoxShoppingProduct />
    </div>
  );
}

export default BoxShoppingProducts;
