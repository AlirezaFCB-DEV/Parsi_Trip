import IboxShoppingProduct from "@/services/Box-shopping-products/types";

function BoxShoppingProduct({
  title,
  imgUrlOne,
  imgUrlTwo,
  imgUrlThree,
  imgUrlFour,
  imgContentOne,
  imgContentTwo,
  imgContentThree,
  imgContentFour,
  TitleLinkAnyProducts,
}: IboxShoppingProduct) {
  return (
    <main className="w-1/4 h-full bg-white p-3 flex flex-col justify-between items-start gap-3 cursor-pointer">
      <h1 className="font-bold text-lg">{title}</h1>

      <div className="w-full h-full p-2 gap-2 grid grid-cols-2">
        <div className="h-full col-span-1">
          <img src={imgUrlOne} className="w-full h-8/10" alt={imgContentOne} />

          <p className="text-sm">{imgContentOne}</p>
        </div>

        <div className="h-full col-span-1">
          <img src={imgUrlTwo} className="w-full h-8/10" alt={imgContentTwo} />

          <p className="text-sm">{imgContentTwo}</p>
        </div>

        <div className="h-full col-span-1">
          <img
            src={imgUrlThree}
            className="w-full h-8/10"
            alt={imgContentThree}
          />

          <p className="text-sm">{imgContentThree}</p>
        </div>

        <div className="h-full col-span-1">
          <img
            src={imgUrlFour}
            className="w-full h-8/10"
            alt={imgContentFour}
          />

          <p className="text-sm">{imgContentFour}</p>
        </div>
      </div>

      <p className="text-sm text-blue-600 hover:border-b">
        {TitleLinkAnyProducts}
      </p>
    </main>
  );
}

export default BoxShoppingProduct;
