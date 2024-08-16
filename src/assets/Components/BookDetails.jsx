import React from "react";
import { useParams , Link } from "react-router-dom";


const products = [
  {
    id: "001",
    image:
      "https://gregory.ph/cdn/shop/products/BuyRichDadPoorDadinPhilippines-3_949c6c8a-0fb9-4c99-80d6-920b36dac648.jpg?v=1626535585",
    name: "Rich Dad Poor Dad",
    price: "324",
    description:
      '"Rich Dad Poor Dad" by Robert Kiyosaki is a personal finance book that contrasts the mindsets of the authors two father figures: his biological father ("Poor Dad"), who values traditional education and job security, and his mentor ("Rich Dad"), who emphasizes financial literacy, investing, and entrepreneurship. The book encourages readers to rethink conventional views on money and build wealth through smart financial strategies.',
  },
  {
    id: "002",
    image:
      "https://www.shesweatsdiamonds.com/wp-content/uploads/2017/02/Five-Things-I-Learned-From-Think-Grow-Rich-She-Sweats-Diamonds.jpg",
    name: "Think and Grow Rich",
    price: "139",
    description:
      '"Think and Grow Rich" by Napoleon Hill is a self-help book that outlines principles for achieving personal and financial success. Based on Hills study of successful individuals, the book emphasizes the power of positive thinking, goal setting, and persistence. It presents 13 principles, such as desire, faith, and specialized knowledge, as key elements to achieving wealth and success. The book aims to inspire readers to harness their inner potential and transform their thoughts into reality.',
  },
  {
    id: "003",
    image:
      "https://i0.wp.com/booksnest.co.uk/wp-content/uploads/2019/03/Becoming.png?fit=1080%2C436&ssl=1",
    name: "Becoming",
    price: "500",
    description:
      '"Becoming" by Michelle Obama is a memoir that chronicles the former First Ladys personal journey from her childhood in Chicago to her experiences in the White House. The book is divided into three parts: "Becoming Me," which explores her early years and education; "Becoming Us," which details her relationship with Barack Obama and their life as a family; and "Becoming More," which reflects on her time in the White House and her role as First Lady. Through candid reflections and personal stories, Obama offers insights into her growth, challenges, and aspirations.',
  },
  {
    id: "004",
    image:
      "https://www.charterworks.com/content/images/2022/07/building-a-second-brainT.png",
    name: "Building a Second Brain",
    price: "250",
    description:
      '"Building a Second Brain" by Tiago Forte is a guide to mastering personal knowledge management. The book introduces the concept of a "second brain"—a digital system for organizing and storing information to enhance productivity and creativity. Forte outlines practical methods for capturing, organizing, and retrieving information using tools and techniques that help individuals manage their ideas and projects more effectively. The goal is to create a reliable system that supports decision-making, learning, and innovation.',
  },
  {
    id: "005",
    image:
      "https://bookspringindia.in/cdn/shop/products/thepowerofhabit.png?v=1626257739",
    name: "The Power of Habit",
    price: "629",
    description:
      '"The Power of Habit" by Charles Duhigg explores the science behind why habits exist and how they can be changed. The book examines how habits form, how they work, and how they can be transformed to improve personal and professional lives. Duhigg introduces the concept of the habit loop, which consists of a cue, routine, and reward, and offers strategies for altering habits by modifying this loop. Through engaging stories and research, the book provides insights into harnessing the power of habits for positive change and success.',
  },
  {
    id: "006",
    image:
      "https://gregory.ph/cdn/shop/products/BuyWhyweSleepinthePhilippines2.jpg?v=1634124591",
    name: "Why we Sleep",
    price: "349",
    description:
      '"Why We Sleep" by Matthew Walker delves into the science of sleep and its crucial role in overall health and well-being. The book explores how sleep affects various aspects of life, including memory, emotional regulation, and physical health. Walker, a sleep scientist, explains the mechanisms of sleep, the impact of sleep deprivation, and the benefits of good sleep hygiene. The book aims to highlight the importance of sleep and provides practical advice for improving sleep quality to enhance daily functioning and long-term health.',
  },
  {
    id: "007",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*TLO_WduhGlWGvuev",
    name: "Million Dollar Weekend",
    price: "749",
    description:
      '"Million Dollar Weekend" by Noah Kagan is a book about entrepreneurial strategies and business growth. It focuses on practical advice for generating significant revenue in a short period through effective marketing and business tactics. Kagan, an experienced entrepreneur and founder of several successful ventures, shares insights, case studies, and actionable steps to help readers accelerate their business success and achieve substantial financial results quickly. The book provides a roadmap for leveraging opportunities and maximizing profits in the competitive business landscape.',
  },
  {
    id: "008",
    image:
      "https://media.licdn.com/dms/image/D4D12AQHZJRikGoFIKw/article-cover_image-shrink_720_1280/0/1696425885734?e=2147483647&v=beta&t=GpXawCAMJqzTZw1qYtR5FJNCAITvrAxqFTSrW9q7jdw",
    name: "Atomic Habits",
    price: "449",
    description:
      '"Atomic Habits" by James Clear is a self-help book that offers a comprehensive guide to building good habits and breaking bad ones. Clear introduces the concept of "atomic habits"—small, incremental changes that can lead to significant personal and professional growth over time. The book outlines practical strategies for habit formation, including the importance of identity-based habits, the role of cues and rewards, and techniques for making habits more effective and sustainable. Clear provides actionable advice and insights to help readers create positive change and achieve long-term success through consistent, small improvements.',
  },
];

const BookDetails = ( { addToCart }) => {
 
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  return (
    <div className="">
      <div className="lg:flex items-center justify-around m-4">
        <div className="flex-shrink-0 ml-50 ">
          <img
            src={product.image}
            alt={product.name}
            className="w-96 flex-shrink-0 h-auto md:w-100 xl:w-100"
          />
        </div>
        <div className="ml-10 mt-4 max-w-xl sm:mt-4 lg:mt-4">
          <div className="text-3xl font-semibold lg:mt-10 mb-2">{product.name}</div> <hr />
          <div className="text-sm text-gray-400 mt-2 mb-2">#{product.id}</div> <hr />
          <div className="text-lg mt-2 mb-2">
            {" "}
            <i className="fa-solid fa-indian-rupee-sign"></i> {product.price}
          </div>{" "}
          <hr />
          <div className="mt-3 mb-3">
            <span className="font-semibold text-lg">Description :</span>{" "}
            <span className="text-gray-500 text-sm">{product.description}</span>
          </div>{" "}
          <hr />
          <div className="mt-3 mb-3 text-sm">
            <span>Sold by:</span>  
            <span className="font-semibold">The Book Bazaar</span>
          </div>
          <hr />
          <div className="mt-4">
            <span className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-400 font-semibold">
              <button onClick={() => {addToCart(product)}}><Link to={`/cart`}>Add to Cart</Link></button>
            </span>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
