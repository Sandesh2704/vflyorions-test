import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function AddSection() {

    // const settings = {
    //     fade: true,
    //     speed: 600,
    //     autoplayspeed: 200,
    //     infinite: true,
    //     autoplay: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     pauseOnHover: false,
    // }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        swipeToSlide: true,
        cssEase: "ease-in-out", 
        appendDots: dots => <Dots dots={dots}/>,
        customPaging: () => <PagingDot />
      };

    const images = [
        '/AddImages/add1.webp',
        '/AddImages/add2.webp',
        '/AddImages/add3.webp',
        '/AddImages/add4.webp',
        '/AddImages/add5.webp',
      ];


    return (
        <>
 
      <Slider {...settings} className='relative z-0 my-1 mx-2 md:my-2 md:mx-3'>
        {images.map((image, index) => (
          <div key={index} className="h-full">
            <img src={image} alt={`Slide ${index + 1}`} height={300} width={500} className="h-32 md:h-40 lg:h-52 object-cover w-full " />
          </div>
        ))}
      </Slider>
        </>
    )
}


const NextArrow = ({ onClick }) => (
    <div
      className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-400 shadow  hidden md:flex md:py-3 lg:py-4 px-0 md:px-1 lg:px-2 rounded-l-sm cursor-pointer"
      onClick={onClick}
    >
     <FaChevronRight/>
    </div>
  );
  
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2  bg-white text-gray-400 shadow hidden md:flex py-2  md:py-3 lg:py-4 px-0 md:px-1 lg:px-2 rounded-r-sm cursor-pointer"
      onClick={onClick}
    >
     <FaChevronLeft className=''/>
    </div>
  );

