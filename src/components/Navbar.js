'use client'
import Link from 'next/link';
import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { useCart } from 'src/context/Dataprovider';


export default function Navbar() {
  const { countCart } = useCart();
  return (
    <>
     <nav className='flex sticky top-0 items-center justify-between py-2 px-3 md:px-16 lg:px-36 bg-gray-100   shadow'>
      <Link href='/' className='text-2xl md:text-3xl lg:text-4xl font-medium'>EliteShop</Link>
      <Link href='/cartitem' className='flex items-center gap-2 md:gap-3 bg-yellow-500 py-2 lg:py-3 px-3 lg:px-6 rounded-xl text-lg lg:text-xl font-medium'>
        <MdShoppingCart />
        Cart  <span>{countCart === 0 ? '' : countCart } </span>
      </Link>
    </nav>
    </>
   
  )
}
