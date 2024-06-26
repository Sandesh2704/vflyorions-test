'use client'
import Image from 'next/image'
import { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { PiUserCircleDuotone } from "react-icons/pi";
import { useCart } from 'src/context/Dataprovider';


export default function ProductDetails({ item }) {

    const maxRating = 5;
    console.log('hi its ', item)
    const { id, specifications, features, reviews, description, price, name, Productrating, image, } = item;
    const { cart, setCart, setCountCart, countCart, isInCart, setIsInCart } = useCart();

    const addToCart = () => {
        setCart((prevCart) => [...prevCart, item]);
        setIsInCart(true)
        setCountCart(countCart + 1)
    };

    const checkIsInCart = () => {
        return cart.some(cartItem => cartItem.id === id);
    };

    useState(() => {
        setIsInCart(checkIsInCart());
    }, [cart, id]);


    const removeFromCart = (item) => {
        console.log('Removing from cart:', item);
        setCart((prevCart) => prevCart.filter(cartItem => cartItem.id !== item.id));
        setIsInCart(false);
        setCountCart(countCart - 1)
    };
    return (
        <>
        <div className='px-3 md:px-12 lg:px-36 my-6 md:my-8'>

        
            <div className=" grid grid-cols-1 bg-white lg:grid-cols-2 gap-3 bg-white ">

                <div className='flex- flex-col'>
                    <div className='flex justify-center py-2'>
                        <Image src={image} alt={name} width={300} height={300} className=' max-w-[64%] md:max-w-[45%] lg:max-w-[60%]  min-w-[64%] md:min-w-[45%] lg:min-w-[60%] h-auto ' priority />
                    </div>

                    <div className='flex flex-col py-1  grid mt-10 gap-3 grid-cols-2 md:mx-5'>
                        <button className='w-full rounded-full bg-orange-500 text-white text-sm md:text-base lg:text-xl py-2 md:py-3 flex items-center gap-2 justify-center'><FaBoltLightning /> Buy Now</button>
                        {isInCart ? (
                                <button
                                    onClick={() => removeFromCart(id)}
                                    className='w-full rounded-full bg-red-600 text-white py-2 md:py-3 flex items-center gap-2 justify-center text-sm md:text-base lg:text-xl'
                                >
                                    Remove
                                </button>
                            ) : (
                                <button
                                    onClick={() => addToCart(id)}
                                    className='w-full rounded-full bg-yellow-500 text-white py-2 md:py-3 flex items-center gap-2 justify-center text-sm md:text-base lg:text-xl'
                                >
                                    Add to Cart
                                </button>
                            )}
                    </div>
                </div>

                <div>
                    <div className='py-2 pb-2 md:pb-2 border-b-2 border-gray-300 px-2'>
                        <h1 className='text-xl  lg:text-2xl font-semibold '>{name}</h1>
                        <div className="flex items-center my-1">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                {[...Array(maxRating)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        className={`text-sm md:text-base lg:text-lg ${index < Productrating ? 'text-yellow-400' : 'text-gray-200'}`}
                                    />
                                ))}
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded ms-3">
                                {Productrating}.0
                            </span>

                        </div>
                        <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-black">${price}</span>
                    </div>

                    <div className='flex flex-col py-4 border-b-2 grid grid-cols-1 gap-3 md:grid-cols-2 border-gray-300 px-2'>
                        <div className='flex flex-col'>
                            <h1 className='text-base font-bold'>Specifications</h1>
                            <ul className='pl-2 mt-2 text-sm md:text-base flex flex-col gap-2'>
                                {Object.entries(specifications).map(([key, value]) => (
                                    <li key={key}>
                                        {key} : <span className='font-normal'>{value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-base font-bold'>Features</h1>
                            <ul className='list-disc pl-7 mt-1 text-sm md:text-base flex flex-col gap-2'>
                                {features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col py-4 border-b-2 border-gray-300 px-2'>
                        <h1 className='text-base font-bold'>About this item </h1>
                        <div className='mt-1 text-sm md:text-base'>{description}</div>
                    </div>

                    <div className='flex flex-col py-4 border-b-2 border-gray-300 px-2'>
                        <h1 className='text-base font-bold'>Product Review</h1>
                        <div className='mt-5 flex flex-col gap-3'>
                            {reviews.map((review, index) => (
                                <div key={index} className='flex flex-row gap-3 mx-2 '>
                                    {/* User Avatar */}
                                    <PiUserCircleDuotone className='text-4xl lg:text-5xl' />
                                    {/* Review Details */}
                                    <div className='flex flex-col'>
                                        <h1 className='text-base md:text-lg text-gray-700 font-bold'>
                                            {review.user}
                                        </h1>
                                        {/* Rating Stars */}
                                        <div className="flex items-center ">
                                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                                {[...Array(maxRating)].map((_, starIndex) => (
                                                    <FaStar
                                                        key={starIndex}
                                                        className={`text-xs md:text-sm ${starIndex < review.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                                                    />
                                                ))}
                                            </div>
                                            {/* Rating Value */}
                                            <span className="md:bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded ms-1 md:ms-3">
                                                {review.rating}.0
                                            </span>
                                        </div>
                                        {/* Review Comment */}
                                        <div className='text-sm md:text-base my-2 md:my-3'>
                                            {review.comment}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className=' py-4 px-2'>
                        <h1 className='text-base font-bold'>Add Review</h1>
                        <form className='flex flex-col gap-3' >
                            <div className='mt-4 text-sm md:text-base flex gap-2  md:gap-5'>
                                <label htmlFor="" className='py-2'>Comment </label>
                                <textarea name="comment" id="" rows="4" cols="50" className='w-full bg-gray-100 p-2 ' placeholder='Add your comment here '></textarea>
                            </div>
                            <div className='flex justify-end'>
                                <button className='bg-cyan-500 text-white py-1 px-5 font-medium rounded-sm text-base' >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
