const Product = ({ product }) => {
  return (
    <div className="w-72 h-96 rounded-lg bg-black">
      <img src={product.image} className="h-64 w-full rounded-lg" />
      <div className="flex">
        <span className="text-white">نام محصول:</span>
        <p className="font-mono font-bold text-white">{product.title}</p>
        <span className="font-mono font-bold text-white">{product.price}</span>
      </div>
    </div>
  );
};

export default Product;
