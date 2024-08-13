import React from "react";

const Marquee = () => {
  return (
    <div>
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="5"
        className="text-lg font-semibold text-orange-800 animate-pulse"
      >
        Welcome to Book Bazaar! <span className="pl-60">Sale on live!!</span>
        <span className="pl-60">Limited-Time Offers on Bestsellers!</span>
      </marquee>
    </div>
  );
};

export default Marquee;
