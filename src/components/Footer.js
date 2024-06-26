import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-col gap-4 md:flex-row items-center bg-purple-950 text-white justify-between py-4 px-3 md:px-16 lg:px-36 '>
      <Link href='/' className='text-2xl md:text-3xl font-medium'>EliteShop</Link>
      <span className="block text-xs md:text-sm  text-white   text-center">© 2023<a href="https://flowbite.com/" className="hover:underline">EliteShop™</a>. All Rights Reserved.</span>
      <div className='flex flex-col text-xs md:text-sm gap-1  text-center block text-base'>
        <h1 className=''>Crafted with passion by Sandesh Deshmukh</h1>
        <p className='text-yellow-500 font-medium hover:undeerline cursor-pointer'><Link href='mailto:sandeshdeshmukh2704@email.com' />sandeshdeshmukh2704@email.com</p>
      </div>
    </footer>
  )
}
