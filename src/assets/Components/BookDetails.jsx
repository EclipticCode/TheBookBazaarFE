import React from "react";
import { useParams , Link } from "react-router-dom";
import { products } from "./constants";


const BookDetails = ( { addToCart }) => {
 
  const username = localStorage.getItem("Login")
  
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  return (
    <div className="">
      <div className="lg:flex items-center justify-around m-4">
        <div className="flex-shrink-0 ml-50 ">
          <img
            src={product.image}
            alt={product.name}
            className="w-96 flex-shrink-0 h-auto md:w-100 xl:w-100"
          />
        </div>
        <div className="ml-10 mt-4 max-w-xl sm:mt-4 lg:mt-4">
          <div className="text-3xl font-semibold lg:mt-10 mb-2">{product.name}</div> <hr />
          <div className="text-sm text-gray-400 mt-2 mb-2">#{product.id}</div> <hr />
          <div className="text-lg mt-2 mb-2">
            {" "}
            <i className="fa-solid fa-indian-rupee-sign"></i> {product.price}
          </div>{" "}
          <hr />
          <div className="mt-3 mb-3">
            <span className="font-semibold text-lg">Description :</span>{" "}
            <span className="text-gray-500 text-sm">{product.description}</span>
          </div>{" "}
          <hr />
          <div className="mt-3 mb-3 text-sm">
            <span>Sold by:</span>  
            <span className="font-semibold">The Book Bazaar</span>
          </div>
          <hr />
          <div className="mt-4">
            <span>
              {username ? (<button className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-400 font-semibold" onClick={() => {addToCart(product)}}><Link to={`/cart`}>Add to Cart</Link></button> ): (<button className=" bg-gray-400 py-2 px-4 rounded font-semibold" onClick={() => {alert("Login to Add to Cart")}}>Add to Cart</button>)}
            </span>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
