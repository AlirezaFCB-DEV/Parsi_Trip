function BoxShoppingProduct() {
  return (
    <div className="w-1/4 h-full bg-white p-3 flex flex-col justify-between items-start gap-3">
      <h1 className="font-bold text-xl">test</h1>

      <div className="w-full h-full bg-red-400 p-2 gap-2 grid grid-cols-2">
        <div className="h-full bg-blue-300 col-span-1">
          <p className="w-full h-8/10 bg-green-400">img</p>

          <p className="text-sm">content</p>
        </div>

        <div className="h-full bg-blue-300 col-span-1">
          <p className="w-full h-8/10 bg-green-400">img</p>

          <p className="text-sm">content</p>
        </div>

        <div className="h-full bg-blue-300 col-span-1">
          <p className="w-full h-8/10 bg-green-400">img</p>

          <p className="text-sm">content</p>
        </div>

        <div className="h-full bg-blue-300 col-span-1">
          <p className="w-full h-8/10 bg-green-400">img</p>

          <p className="text-sm">content</p>
        </div>
      </div>

      <p className="text-sm text-blue-500">shop resort wear</p>
    </div>
  );
}

export default BoxShoppingProduct;
