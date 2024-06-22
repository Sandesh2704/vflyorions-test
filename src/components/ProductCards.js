'use client'
import { useState} from 'react'
import Image from 'next/image'
import img from '../../public/Productimage/airboads.webp'
import { FaStar } from "react-icons/fa";
import Link from 'next/link';
import { useCart } from 'src/context/Dataprovider';

export default function ProductCards({ item }) {

    const { id, name, description, price, Productrating, image } = item;
    const { cart, setCart, setCountCart, countCart, isInCart, setIsInCart} = useCart();

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


    const maxRating = 5;
    return (
        <div>
            <Link href={`/products/${id}`} className="w-full h-full bg-gray-100 border  rounded-lg shadow ">
                <div className='flex justify-center w-full h-64 lg:h-96 items-center'>
                    <Image src={image} alt="productimage" width={400} height={400} className='max-h-64 lg:max-h-96 bg-gray-100 rounded-t-lg' />
                </div>
                <div className="px-2 md:px-3 lg:px-5 py-3 ">
                    <Link href={`/products/${id}`}>
                        <h5 className="text-base  md:text-lg lg:text-xl font-semibold tracking-tight text-black ">{name}</h5>
                    </Link>
                    <div className="flex items-center my-2">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            {[...Array(maxRating)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    className={`text-sm md:text-base g:text-lg ${index < Productrating ? 'text-yellow-400' : 'text-gray-200'}`}
                                />
                            ))}
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded ms-3">
                            {Productrating}.0
                        </span>
                    </div>
                    <div className='mt-2 mb-5 text-sm lg:text-base'>{description.slice(0, 250)}</div>
                    <div className="flex items-center justify-between">
                        <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-black">${price}</span>
                        <div className='flex items-center gap-2  lg:gap-4'>
                            <Link rel="stylesheet" href={`/products/${id}`} className='text-blue-800 font-medium hover:underline underline-offset-2 text-center text-xs md:text-base'>More Details</Link>
                            {isInCart ? (
                                <button
                                    onClick={() => removeFromCart(id)}
                                    className="bg-red-500 text-white text-center px-2 lg:px-4 py-2 rounded"
                                >
                                    Remove
                                </button>
                            ) : (
                                <button
                                    onClick={() => addToCart(id)}
                                    className="bg-green-500 text-white px-2 lg:px-4 py-2 rounded"
                                >
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
