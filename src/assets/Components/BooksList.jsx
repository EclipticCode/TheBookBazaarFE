import React, { useState } from "react";
import { Link } from "react-router-dom";
import { booksLists } from "./constants";


const BooksList = () => {
  const username = localStorage.getItem("Login");
  const [selectedSort , setSelectedSort] = useState("")
  
  const callbackRatingHL = (a, b) => {
    const firstBook = Number(a.price);
    const secondBook = Number(b.price);
     if (firstBook > secondBook) {
      return -1;
    }
    return 1;
  };

  const callbackRatingLH = (a, b) => {
    const firstBook = Number(a.price);
    const secondBook = Number(b.price);
     if (firstBook > secondBook) {
      return 1;
    }
    return -1;
  };

  if(selectedSort?.length){
    if (selectedSort === "Price High to Low") {
      booksLists.sort((a, b) => callbackRatingHL(a, b));
    }
    if(selectedSort === "Price Low to High"){
      booksLists.sort((a, b) => callbackRatingLH(a, b));
    }
  }

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex">
            <div>
              {" "}
              <h2 className="text-2xl font-bold tracking-tight text-cyan-800">
                Our latest collections
              </h2>
            </div>
            <div className="text-2xl font-semibold text-cyan-800 ml-auto">
              <select className="border-2 border-cyan-500 rounded ml-4 text-base p-1" onChange={(e) => setSelectedSort(e.target.value)}>
                <option>Select</option>
                <option value="Price High to Low">Price High to Low</option>
                <option value="Price Low to High">Price Low to High</option>
              </select>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {booksLists.map((product) => (
              <div
                key={product.id}
                className="group relative border-2 rounded p-2 hover:drop-shadow-xl"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-base text-gray-900 font-medium">
                      <span aria-hidden="true" className="inset-0" />
                      <Link to={product.name}>{product.name}</Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.author}
                    </p>
                  </div>
                  <p className="text-base font-medium text-gray-700">
                    <i className="fa-solid fa-indian-rupee-sign text-sm"></i>&nbsp;
                    {product.price}
                  </p>
                </div>
                <div className="">
                  {username ? (
                    <button className="bg-cyan-500 group-hover:bg-cyan-400 rounded text-white font-semibold items-center justify-center w-full text-center py-1 mt-4">
                      <Link to={`/product/${product.id}`}>View Details</Link>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        alert("Login to View Details");
                      }}
                      className="text-white items-center justify-center w-full text-center bg-gray-400 rounded py-1 mt-4"
                    >
                      View Details
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksList;
