import React from "react";

const Feature = () => {
  return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">
            Featured in
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Deccan Chronicle"
              src="https://fullyfilmy.in/cdn/shop/files/DC_ae1da74e-4f4a-417b-b9f8-29b3ffdb1738_175x.jpg?v=1614290728.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="DT NEXT"
              src="https://fullyfilmy.in/cdn/shop/files/DT_63648567-cb30-4cf1-afc3-73b3a75c8aab_175x.jpg?v=1614290728.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="The Hindu"
              src="https://fullyfilmy.in/cdn/shop/files/H_4e7a5e5f-f6c2-40d7-b9b2-ae52461c7151_175x.jpg?v=1614290728.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Indian Express"
              src="https://fullyfilmy.in/cdn/shop/files/IE_53a2e189-4187-460b-936c-339d2a54d85f_175x.jpg?v=1614290728.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="The NEWS Minute"
              src="https://fullyfilmy.in/cdn/shop/files/NM_02beeade-da75-49cc-b75b-8ffcae15868c_175x.jpg?v=1614290728.svg"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>
  );
};

export default Feature;
