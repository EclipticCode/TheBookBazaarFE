import React from "react";
import bblogo from "../../assets/BB-Logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between m-4">
      {/* logo - left side */}
      <div className="flex-shrink-0 cursor-pointer">
        <Link to={`/`}>
          {" "}
          <img
            src={bblogo}
            width={100}
            height={100}
            className="max-h-12 object-contain"
          />
        </Link>
      </div>
      {/* Login and Cart - right side */}
      <div className="flex items-center space-x-8 ml-auto">
        <div className="bg-cyan-500 hover:border-2 border-cyan-800 text-white font-bold py-1 px-4 rounded">
          <button className="">
            <Link to={`/login`}>Login</Link>
          </button>
        </div>
        <div className="hover:bg-cyan-500 py-1 px-2 rounded font-medium">
          <button>
            <Link to={`/cart`}>Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
