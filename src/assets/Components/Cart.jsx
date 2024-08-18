import React, { useState } from "react";


const Cart = ({ cartItems }) => {

  const [quantities, setQuantities] = useState({});

  const handleChange = (event, productId) => {
    event.preventDefault
    const newQuantities = {
      ...quantities,
      [productId]: (event.target.value),
    };
    setQuantities(newQuantities);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, product) => {
      const quantity = quantities[product.id] || 0;
      return total + quantity * product.price;
    }, 0);
  };

  return (
    <div className="">
      <div className="text-3xl ml-20 mt-12 font-semibold text-cyan-800">
        Your Shopping Cart
      </div>
      <div className="m-20">
        <div className="flow-root">
          <ul role="list" className="my-6 divide-y divide-gray-200">
            { cartItems.length > 0 ? (cartItems.map((product) => (
              <li key={product.id} className="flex py-6">
                <div className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    alt="book image"
                    src={product.image}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="ml-10 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-xl font-medium text-gray-700">
                      <h3>
                        <a href={product.href}>{product.name}</a>
                        <select
                          className="border-2 border-cyan-500 rounded ml-4 text-base p-1"
                          onChange={(event) => {
                            handleChange(event, product.id);
                          }}
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </h3>
                      <p className="ml-4">
                        <i className="fa-solid fa-indian-rupee-sign"></i>&nbsp;
                        {product.price} /- <span className="text-sm text-gray-700">per quantity</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-base text-gray-500">
                    <p className="font-semibold">
                      Qty: {quantities[product.id] || 0}
                    </p>

                    <div className="flex">
                    </div>
                  </div>
                </div>
              </li>
            ))) :  
            <div className="text-2xl font-medium text-center">Your Cart is empty :( </div>}
          </ul>
        </div>
      { cartItems.length > 0 ? ( <div>
        <hr />
        <div className="flex flex-1 items-end justify-between mt-10">
          <div></div>
          <div className="flex text-2xl font-semibold text-cyan-800">
            Grand Total:{" "}
            <i className="fa-solid fa-indian-rupee-sign text-2xl ml-4 mr-2"></i>{" "}
            {calculateTotal()}
          </div>
        </div>
      </div>) : <div></div>}
      </div>
    </div>
  );
};

export default Cart;
