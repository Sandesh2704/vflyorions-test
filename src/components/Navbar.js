'use client'
import Link from 'next/link';
import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { useCart } from 'src/context/Dataprovider';
import furniture from '/public/Categories/furniture.png'
import books from '../../public/Categories/books.png'
import electronic from '../../public/Categories/electronic.png'
import fashionmodels from '../../public/Categories/fashion.png'
import traval from '../../public/Categories/traval.png'
import personalcare from '../../public/Categories/personal-care.png'
import sports from '../../public/Categories/sports.png'
import toy from '/public/Categories/toy.png'
import petsupplies from '/public/Categories/petsupplies.png'
import footwaer from '/public/Categories/footwear.png'
import guiter from '/public/Categories/guitar.png'
import Image from 'next/image';


export default function Navbar() {
  const { countCart } = useCart();

  const Categories = [
    // {title: 'Electronics',  image: electronic},
    {title: 'Books',  image: books},
    // {title: 'Furniture',  image: furniture},
    {title: 'Fashion',  image: fashionmodels},
    {title: 'Pet Supplies',  image: petsupplies},
    {title: 'Sports & Fitness',  image: sports},
    {title: 'Baby Products',  image: toy },
    {title: 'Personal Care',  image: personalcare },
    {title: 'Traval',  image: traval},
    {title: 'Music Instruments',  image: guiter},
    {title: 'Footwear',  image: footwaer}
  ];


  return (
    <>
     <nav className='flex sticky top-0 items-center justify-between py-2 px-3 lg:px-36 bg-purple-950 text-white  shadow'>
      <Link href='/' className='text-2xl md:text-3xl lg:text-3xl font-medium'>EliteShop</Link>
      <Link href='/cartitem' className='flex items-center gap-2 md:gap-3 bg-yellow-500 py-2 lg:py-2 px-3 lg:px-6 rounded-xl text-base md:text-lg lg:text-lg font-medium'>
        <MdShoppingCart />
        Cart  <span>{countCart === 0 ? '' : countCart } </span>
      </Link>
    </nav>

    <nav className='categories py-2 px-3 lg:px-36 flex gap-2 md:gap-5 bg-white m-2 lg:m-3 overflow-scroll'>
      {Categories.map((item, index) => (
        <div key={index} className='flex flex-col px-2  lg:px-5 py-2 items-center '>
        <Image src={item.image} height={300} width={200} className='h-10 w-10 md:h-16 md:w-16 lg:w-20 mb-2 md:mb-3' priority alt={item.image}/>
        <p className='text-xs md:text-base font-semibold text-center hover:text-blue-700'>{item.title}</p>
        </div>
      ))}
    </nav>
    </>
   
  )
}
