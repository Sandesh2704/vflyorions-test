'use client'
import React, {useState} from 'react'
import { IoStarSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

export default function Filter() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='w-full h-fit border bg-white  shadow'>
                <div className='border-b-2 border-gray-200  flex justify-between items-center  p-3' >
                    <h1 className='text-xl font-medium'> Filter</h1>
                    <FaChevronDown className={ `flex lg:hidden ${isOpen ? 'rotate-180' : 'rotate-0'}`} onClick={toggleAccordion}/>
                </div>
                <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-fit' : 'max-h-0'} lg:max-h-full md:block`}>


                <div className='flex flex-warp w-full flex-col '>
                <div className='w-full flex flex-row lg:flex-col'>
                            <div className='w-full p-3 '>
                                <h1 className='text-xs font-semibold'>CUSTOMER RATINGS</h1>
                                <div className="space-y-2 pl-3 lg:pl-5 py-3 text-sm font-normal">
                                    <div className="flex items-center">
                                        <input id="300+" type="checkbox" name="Price" value="300+" className="h-3 w-3 rounded border-gray-300" />
                                        <label htmlFor="300+" className="ml-2 flex gap-1" > <span className='flex items-center  font-semibold '>4<IoStarSharp size={10} /></span> & above </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="300+" type="checkbox" name="Price" value="300+" className="h-3 w-3 rounded border-gray-300" />
                                        <label htmlFor="300+" className="ml-2 flex gap-1" > <span className='flex items-center  font-semibold '>3<IoStarSharp size={10} /></span> & above </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="300+" type="checkbox" name="Price" value="300+" className="h-3 w-3 rounded border-gray-300" />
                                        <label htmlFor="300+" className="ml-2 flex gap-1" > <span className='flex items-center  font-semibold '>2<IoStarSharp size={10} /></span> & above </label>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full p-3'>
                                <h1 className='text-xs font-semibold'>PRICE</h1>
                                <div className="space-y-2 pl-3 lg:pl-5 py-3 text-sm font-normal">
                                    <div className="flex items-center">
                                        <input id="300+" type="checkbox" name="Price" value="300+" className="h-3 w-3 rounded border-gray-300" />
                                        <label htmlFor="300+" className="ml-2 ">10-50$ </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="300+" type="checkbox" name="Price" value="300+" className="h-3 w-3 rounded border-gray-300" />
                                        <label htmlFor="300+" className="ml-2 ">50$-100$ </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="300+" type="checkbox" name="Price" value="300+" className="h-3 w-3 rounded border-gray-300" />
                                        <label htmlFor="300+" className="ml-2">100$-500$</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="300+" type="checkbox" name="Price" value="300+" className="h-3 w-3 rounded border-gray-300" />
                                        <label htmlFor="300+" className="ml-2">500$-1000$</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="300+" type="checkbox" name="Price" value="300+" className="h-3 w-3 rounded border-gray-300" />
                                        <label htmlFor="300+" className="ml-2">1000$-5000$</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="300+" type="checkbox" name="Price" value="300+" className="h-3 w-3 rounded border-gray-300" />
                                        <label htmlFor="300+" className="ml-2">5000$-10000$</label>
                                    </div>
                                </div>
                            </div>
                </div>
                        <div className= 'w-full  px-3 py-3 md:py-0'>
                            <h1 className='text-xs font-semibold'>SORTS BY</h1>
                            <div className="space-y-2 pl-3 lg:pl-5 py-3 text-sm font-normal">
                                <div className="flex items-center">
                                    <input id="300+" type="radio" name="Price" value="300+" className="h-3 w-3 rounded border-gray-300" />
                                    <label htmlFor="300+" className="ml-2 ">Price - High To Low</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="300+" type="radio" name="Price" value="300+" className="h-3 w-3 rounded border-gray-300" />
                                    <label htmlFor="300+" className="ml-2 ">Price - Low To High </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='p-3 3 flex justify-end'>
                        <button className='px-7 py-1.5  md:py-2 rounded-sm text-sm bg-blue-600 font-medium md:font-semibold text-white'>Apply</button>
                    </div>
                </div>
            </div>
        </>
    )
}
