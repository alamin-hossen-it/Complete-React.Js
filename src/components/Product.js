export const Product = ({product}) => {
  const { image, title, rating, price } = product;
  return (
    <div className="flex flex-col border border-gray-600 p-1 items-center h-80 justify-center 
             mx-2 my-2 mr-6 rounded-md 
             transition-colors delay-0.5s duration-0.5s 
             hover:bg-slate-600 translate-x-2 hover:text-white">
      <img className="w-28 h-40" src={image} />

      <h1> {title}</h1>
      <p>Rating: {rating?.rate}</p>
      <p>Price: ${price}</p>
     
     
    </div>
  );
};

export const  HOF = (NewItem)=>{
   return (props)=>{
    return ( 
      <div className="relative">
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold py-1 px-2 ml-5 rounded-md z-20">Best Seller</span>
        <NewItem {...props} />
      
      </div>
    )
   }
}