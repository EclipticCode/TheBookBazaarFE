import React from "react";

const Socialmedia = () => {
  return (
    <div className="h-40 w-auto bg-zinc-900">
      <h2 className="text-xl font-light text-white text-center p-4">
        Join the #BBArmy
      </h2>
      <div className="flex justify-center">
        <img
          alt="facebook"
          src="https://cdn.shopify.com/s/files/1/1002/7150/files/Social-Media-Icons1_134x134_crop_center@2x.jpg?v=1596170287"
          width={80}
          height={40}
          className="max-h-12 object-contain"
        />

        <img
          alt="Twitter"
          src="https://cdn.shopify.com/s/files/1/1002/7150/files/Social-Media-Icons2_134x134_crop_center@2x.jpg?v=1596170289"
          width={80}
          height={40}
          className="max-h-12 object-contain"
        />

        <img
          alt="Instagram"
          src="https://cdn.shopify.com/s/files/1/1002/7150/files/Social-Media-Icons3_134x134_crop_center@2x.jpg?v=1596170291"
          width={80}
          height={40}
          className="max-h-12 object-contain"
        />

        <img
          alt="You Tube"
          src="https://cdn.shopify.com/s/files/1/1002/7150/files/Social-Media-Icons4_134x134_crop_center@2x.jpg?v=1596170293"
          width={80}
          height={40}
          className="max-h-12 object-contain"
        />
      </div>
    </div>
  );
};

export default Socialmedia;
