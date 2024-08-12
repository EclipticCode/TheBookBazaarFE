import React from "react";

const Marquee = () => {
  return (
    <div>
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="5"
        className="text-xl font-bold text-black animate-pulse"
      >
        Welcome to Book Bazaar! <span className="pl-24">Sale on live!!</span>
      </marquee>
    </div>
  );
};

export default Marquee;
