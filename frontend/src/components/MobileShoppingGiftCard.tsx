import IgiftCarditem from "@/services/Mobile-Gift-Cards/types";

function MobileShoppingGiftCard({ imgUrl, title }: IgiftCarditem) {
  return (
    <div className="w-90 h-110 p-2 rounded-lg bg-white cursor-pointer">
      <h1 className="font-bold text-2xl h-1/12">{title}</h1>

      <img src={imgUrl} className="w-full h-11/12 bg-black rounded-lg" />

      {/* <div className="w-full h-11/12 bg-black rounded-lg"></div> */}
    </div>
  );
}

export default MobileShoppingGiftCard;
