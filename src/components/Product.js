export const Product = ({singleProduct}) => {
  const { image, title, rating, price } = singleProduct;
  return (
    <div className="product">
      <img src={image} />

      <h1> {title}</h1>
      <p>Rating: {rating?.rate}</p>
      <p>Price: {price}</p>
    </div>
  );
};