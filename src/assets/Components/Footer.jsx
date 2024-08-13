import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="lg:flex items-center justify-between m-10 ">
        <div className="max-w-xl">
          <div className="font-semibold text-lg text-orange-800">THE BOOK BAZAAR</div>
          <div className="font-normal text-sm text-gray-700">
            Your one-stop destination for a world of books. From timeless
            classics to the latest releases, we bring you a curated collection
            that caters to every reader's taste. Browse, discover, and order
            your next great read from the comfort of your home.
          </div>
        </div>
        <div className="max-w-xl sm:mt-4 lg:mt-0">
          <div className="font-semibold text-lg text-orange-800">Contact</div>
          <div className="">
           <div className="text-gray-700"><span><i className="fa-solid fa-envelope pr-4 text-yellow-450"></i></span>contact@thebookbazaar.com</div>
           <div className="text-gray-700"><span><i className="fa-solid fa-phone pr-4 text-yellow-450"></i></span>+91 9586247385</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
