const Product = ({ product }) => {
  return (
    <div className="">
      <img src={product.image} className="h-20 w-20" />
      <p>{product.title}</p>
      <span>{product.price}</span>
    </div>
  );
};

export default Product;
