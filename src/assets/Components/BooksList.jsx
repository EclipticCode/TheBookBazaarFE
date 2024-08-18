import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id:'001',
    name: "Rich Dad Poor Dad",
    href: "richDadPoorDad",
    price: "324",
    imageSrc:
      "https://gregory.ph/cdn/shop/products/BuyRichDadPoorDadinPhilippines-3_949c6c8a-0fb9-4c99-80d6-920b36dac648.jpg?v=1626535585",
    imageAlt: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
  },
  {
    id: '002',
    name: "Think and Grow Rich",
    href: "thinkAndGrowRich",
    price: "139",
    imageSrc:
      "https://www.shesweatsdiamonds.com/wp-content/uploads/2017/02/Five-Things-I-Learned-From-Think-Grow-Rich-She-Sweats-Diamonds.jpg",
    imageAlt: "Think and Grow Rich",
    author: "Napoleon Hill",
  },
  {
    id: '003',
    name: "Becoming",
    href: "becoming",
    price: "500",
    imageSrc:
      "https://i0.wp.com/booksnest.co.uk/wp-content/uploads/2019/03/Becoming.png?fit=1080%2C436&ssl=1",
    imageAlt: "Becoming",
    author: "Michelle Obama",
  },
  {
    id: '004',
    name: "Building a Second Brain",
    href: "buildingASecondBrain",
    price: "250",
    imageSrc:
      "https://www.charterworks.com/content/images/2022/07/building-a-second-brainT.png",
    imageAlt: "Building a Second Brain",
    author: "Tiago Forte",
  },
  {
    id: '005',
    name: "The Power of Habit",
    href: "thePowerOfHabit",
    price: "629",
    imageSrc:
      "https://bookspringindia.in/cdn/shop/products/thepowerofhabit.png?v=1626257739",
    imageAlt: "The Power of Habit",
    author: "Charles Duhigg",
  },
  {
    id: '006',
    name: "Why We Sleep",
    href: "whyWeSleep",
    price: "349",
    imageSrc:
      "https://gregory.ph/cdn/shop/products/BuyWhyweSleepinthePhilippines2.jpg?v=1634124591",
    imageAlt: "Why We Sleep",
    author: "Mathew Walker",
  },
  {
    id: '007',
    name: "Million Dollar Weekend",
    href: "millionDollarWeekend",
    price: "749",
    imageSrc: "https://miro.medium.com/v2/resize:fit:1400/0*TLO_WduhGlWGvuev",
    imageAlt: "Million Dollar Weekend",
    author: "Noah Kagan",
  },
  {
    id: '008',
    name: "Atomic Habits",
    href: "atomicHabits",
    price: "449",
    imageSrc:
      "https://media.licdn.com/dms/image/D4D12AQHZJRikGoFIKw/article-cover_image-shrink_720_1280/0/1696425885734?e=2147483647&v=beta&t=GpXawCAMJqzTZw1qYtR5FJNCAITvrAxqFTSrW9q7jdw",
    imageAlt: "Atomic Habits",
    author: "James Clear",
  },
];

const BooksList = () => {

  const username = localStorage.getItem("Login")
  
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-cyan-800">
            Our latest collections
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative border-2 rounded p-2 hover:drop-shadow-xl">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-base text-gray-900 font-medium">
                      <span aria-hidden="true" className="inset-0" />
                      <Link to={product.name}>{product.name}</Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.author}
                    </p>
                  </div>
                  <p className="text-base font-medium text-gray-700">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    {product.price}
                  </p>
                </div>
                <div className="">
                  {username ? ( <button className="bg-cyan-500 group-hover:bg-cyan-400 rounded text-white font-semibold items-center justify-center w-full text-center py-1 mt-4"><Link to={`/product/${product.id}`}>View Details</Link></button>) :  <button onClick={() => {alert("Login to View Details")}}className="text-white items-center justify-center w-full text-center bg-gray-400 rounded py-1 mt-4">View Details</button>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksList;
