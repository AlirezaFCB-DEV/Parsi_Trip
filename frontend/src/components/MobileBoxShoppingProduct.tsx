import IboxShoppingProduct from "@/services/Box-shopping-products/types";

function MobileBoxShoppingProduct({
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
    <div className="w-90 h-110 p-2 rounded-lg bg-white flex flex-col justify-between items-start">
      <h1 className="font-bold text-[21px]">{title}</h1>

      <div className="w-full h-full grid grid-cols-2 gap-3">
        <div className="col-span-1">
          <img src={imgUrlOne} alt={imgContentOne} className="w-full h-11/12 rounded-lg" />
          <p className="h-1/12">{imgContentOne}</p>
        </div>

        <div className="col-span-1">
          <img src={imgUrlTwo} alt={imgContentTwo} className="w-full h-11/12 rounded-lg" />
          <p className="h-1/12">{imgContentTwo}</p>
        </div>

        <div className="col-span-1">
          <img src={imgUrlThree} alt={imgContentThree} className="w-full h-11/12 rounded-lg" />
          <p className="h-1/12">{imgContentThree}</p>
        </div>

        <div className="col-span-1">
          <img src={imgUrlFour} alt={imgContentFour} className="w-full h-11/12 rounded-lg" />
          <p className="h-1/12">{imgContentFour}</p>
        </div>
      </div>

      <p className="text-blue-700 mt-3">{TitleLinkAnyProducts}</p>
    </div>
  );
}

export default MobileBoxShoppingProduct;
