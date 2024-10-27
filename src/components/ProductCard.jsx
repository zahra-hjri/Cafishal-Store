const ProductCard = ({ name, price, quantity }) => {
  return (
    <li className="bg-gray-300 rounded-lg p-2 w-[50%] mt-5 flex gap-5 items-center">
      <span className="font-bold">{name}</span>
      <span>price:{price}$</span>
      <input
        type="number"
        value={quantity}
        className="px-3 rounded-md py-1 w-52"
      />
      <button className="bg-red-400 text-white rounded-md px-5 py-1">
        Delete
      </button>
    </li>
  );
};

export default ProductCard;
