function NewCustomer() {
  return (
    <div className="flex flex-col justify-between items-start w-full p-3 bg-white">
      <h1 className="text-xl font-bold mb-5">sign in for best experience</h1>

      <button className="w-full bg-amber-400 rounded-full h-12">
        sign in securely
      </button>

      <span className="border-b border-blue-600 text-blue-600 mt-4">
        create an account
      </span>
    </div>
  );
}

export default NewCustomer;
