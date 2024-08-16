import React from "react";
import "./Scroll.css";

const Scroll = () => {
  return (
    <marquee  behavior="scroll"
    direction="left"
    scrollamount="5">
      <div className="mt-10">
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth">
          <div className="snap-always snap-center w-60 h-60 flex-shrink-0 mx-20">
            <img src="https://i.pinimg.com/originals/65/7f/54/657f54893e67251b07a4dc7e8d332061.jpg" />
          </div>
          <div className="snap-always snap-center w-60 h-60 flex-shrink-0 mx-20">
            <img src="https://bilingualkidspot.com/wp-content/uploads/2018/06/11-300x300.jpg" />
          </div>
          <div className="snap-always snap-center w-60 h-60 flex-shrink-0 mx-20">
            <img src="https://bilingualkidspot.com/wp-content/uploads/2018/06/18-300x300.jpg" />
          </div>
          <div className="snap-always snap-center w-60 h-60 flex-shrink-0 mx-20">
            <img src="https://bilingualkidspot.com/wp-content/uploads/2018/06/25-300x300.jpg" />
          </div>
          <div className="snap-always snap-center w-60 h-60 flex-shrink-0 mx-20">
            <img src="https://bilingualkidspot.com/wp-content/uploads/2018/06/23-300x300.jpg" />
          </div>
        </div>
      </div>
    </marquee>
  );
};

export default Scroll;
