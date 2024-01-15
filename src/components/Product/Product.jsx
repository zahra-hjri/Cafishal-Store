const Product = ({ product }) => {
  return (
    <div className="w-72 h-96 rounded-lg bg-black">
      <img src={product.image} className="h-80 w-full rounded-lg" />
      <div className="flex justify-between">
        <div className="flex">
          <span className="text-white">نام محصول:</span>
          <p className="font-mono font-bold text-white">{product.title}</p>
        </div>
        <div className="flex">
          <span>قیمت:</span>
          <span className="font-mono text-xs font-bold text-white">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
