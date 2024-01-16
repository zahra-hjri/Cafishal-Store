const Product = ({ product }) => {
  return (
    <div className="w-72 h-96 rounded-lg bg-black">
      <img src={product.image} className="h-80 w-full rounded-lg" />
      <div className="flex justify-between p-5">
        <div className="flex text-xs ">
          <span className="text-orange">نام محصول:</span>
          <p className="font-mono font-bold text-white">{product.title}</p>
        </div>
        <div className="flex text-xs ">
          <span className="text-white">قیمت:</span>
          <span className="font-mono text-xs font-bold text-white">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
