import React from 'react'
import { Link } from 'react-router-dom'

const products = [
    {
      id: 1,
      name: 'Rich Dad Poor Dad',
      href: 'richdadpoordad',
      price: '324',
      imageSrc: 'https://gregory.ph/cdn/shop/products/BuyRichDadPoorDadinPhilippines-3_949c6c8a-0fb9-4c99-80d6-920b36dac648.jpg?v=1626535585',
      imageAlt: 'Rich Dad Poor Dad',
      author : 'Robert Kiyosaki'
    },
    {
      id: 2,
      name: 'Think and Grow Rich',
      href: '#',
      price: '139',
      imageSrc: 'https://www.shesweatsdiamonds.com/wp-content/uploads/2017/02/Five-Things-I-Learned-From-Think-Grow-Rich-She-Sweats-Diamonds.jpg',
      imageAlt: 'Think and Grow Rich',
      author : 'Napoleon Hill'
    },
    {
      id: 3,
      name: 'The Hard Thing about Hard Things',
      href: '#',
      price: '500',
      imageSrc: 'https://inkandvolt.com/cdn/shop/files/HarperCollins-Book-HardThings-Feature.png?v=1699591130&width=533',
      imageAlt: 'The Hard Thing about Hard Things',
      author : 'Ben Horowiz'
    },
    {
      id: 4,
      name: 'Building a Second Brain',
      href: '#',
      price: '250',
      imageSrc: 'https://www.charterworks.com/content/images/2022/07/building-a-second-brainT.png',
      imageAlt: 'Building a Second Brain',
      author : 'Tiago Forte'
    },
    {
        id: 5,
        name: 'The Power of Habit',
        href: '#',
        price: '629',
        imageSrc: 'https://bookspringindia.in/cdn/shop/products/thepowerofhabit.png?v=1626257739',
        imageAlt: 'The Power of Habit',
        author : 'Charles Duhigg'
      },
      {
        id: 6,
        name: 'Why We Sleep',
        href: '#',
        price: '349',
        imageSrc: 'https://gregory.ph/cdn/shop/products/BuyWhyweSleepinthePhilippines2.jpg?v=1634124591',
        imageAlt: 'Why We Sleep',
        author : 'Mathew Walker'
      },
      {
        id: 7,
        name: 'Million Dollar Weekend',
        href: '#',
        price: '749',
        imageSrc: 'https://miro.medium.com/v2/resize:fit:1400/0*TLO_WduhGlWGvuev',
        imageAlt: 'Million Dollar Weekend',
        author : 'Noah Kagan'
      },
      {
        id: 8,
        name: 'The Power of Subconscious Mind',
        href: '#',
        price: '449',
        imageSrc: 'https://miro.medium.com/v2/resize:fit:640/1*1vrd1iU1qFXDqFa3-Y6VnA.jpeg',
        imageAlt: 'The Power of your Subconscious Mind',
        author : 'Joseph Murphy'
      },
  ]

const BooksList = () => {
  return (
    <div>
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
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
                    {/* <a href={product.href}> */}
                      <span aria-hidden="true" className="absolute inset-0 " />
                      <Link to={product.name}>{product.name}</Link>
                    {/* </a> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.author}</p>
                </div>
                <p className="text-base font-medium text-gray-700"><i className="fa-solid fa-indian-rupee-sign"></i>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default BooksList