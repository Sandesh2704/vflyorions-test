'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from 'src/context/Dataprovider';
import ProductCards from '@/components/ProductCards';

export default function page() {
    const { cart } = useCart()

    console.log('main', cart)

    return (
        <div>
            <div className="px-3 md:px-16 lg:px-36">
                <h1 className="flex text-center justify-center mt-10 mb-5 text-xl md:text-2xl font-semibold">Cart Items</h1>
                {cart.length === 0 ? (
                    <p className="justify-center flex w-full text-xl md:text-2xl mt-16 font-semibold h-40 bg-gray-200 items-center">Missing cart item ?</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
                        {cart.map((item, index) => (
                            <ProductCards item={item} key={index} />
                        ))}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
                    {
                        cart.map((item, index) =>
                            <ProductCards item={item}
                                key={index} />
                        )
                    }
                </div>
            </div>
        </div>
  
  )
}
