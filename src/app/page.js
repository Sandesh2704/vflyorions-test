'use client'
import ProductCards from "../components/ProductCards";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "src/context/Dataprovider";



export default function Home() {

  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get('/ProductData.json') 
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching the JSON file', error);
      });
  }, []);


  return (
    <>
      <div className="px-3 md:px-16 lg:px-36 ">
        <h1 className="flex text-center justify-center mt-10 mb-5 text-xl md:text-2xl font-semibold">Product Available</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {
            product.map((item, index) =>
              <ProductCards item={item}
                key={index}/>
            )
          }
        </div>
      </div>
    </>
  );
}
