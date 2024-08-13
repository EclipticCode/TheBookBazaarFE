import React from "react";
import bblogo from "../../assets/BB Logo.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between m-4">
      {/* logo - left side */}
      <div className="flex-shrink-0">
        <img
          src={bblogo}
          width={100}
          height={100}
          className="max-h-12 object-contain"
        />
      </div>
      {/* Login and Cart - right side */}
      <div className="flex items-center space-x-8 ml-auto">
        <div className="bg-emerald-500 hover:border-2 border-emerald-800 text-white font-bold py-1 px-4 rounded">
          <button className="">Login</button>
        </div>
        <div className="pr-4 hover:bg-emerald-500 py-1 px-2 rounded"><i className="fa-solid fa-cart-shopping"></i> : 0</div>
      </div>
    </div>
  );
};

export default Navbar;
