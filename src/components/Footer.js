import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-col gap-4 md:flex-row items-center justify-between py-5 border-t-2 border-cyan-500 px-3 md:px-16 lg:px-36 bg-gray-100  '>
         <Link href='/' className='text-2xl md:text-3xl lg:text-4xl font-medium'>EliteShop</Link>
         <span className="block text-sm md:text-base text-gray-500   text-center">© 2023<a href="https://flowbite.com/" class="hover:underline">EliteShop™</a>. All Rights Reserved.</span>
         <div className='flex flex-col text-sm md:text-base  text-center block text-base'>
<h1 className=''>Crafted with passion by Sandesh Deshmukh</h1>
<p className='text-cyan-700'><Link href='mailto:sandeshdeshmukh2704@email.com' className='text-cyan-500'/>sandeshdeshmukh2704@email.com</p>
         </div>
    </footer>
  )
}
