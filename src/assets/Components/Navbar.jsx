import React from "react";
import bblogo from "../../assets/BBLOGO.svg";

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
      <div className="flex items-center space-x-10 ml-auto">
        <div className="bg-yellow-450 hover:border-2 border-orange-800 text-white font-bold py-1 px-4 rounded">
          <button className="">Login</button>
        </div>
        <div className="">Cart</div>
      </div>
    </div>
  );
};

export default Navbar;
