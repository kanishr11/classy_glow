import React from 'react';
import { assets } from '../assets/assets';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Offers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "10px",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='h-auto bg-gray-200 opacity-75'>
      <div className='w-9/12 m-auto border h-[270px] sm:h-[330px]'>
        <Slider {...settings} className='mt-4 h-200px'>
          <div className="w-full h-full">
            <img className='w-full h-full object-cover' src={assets.hero_img} alt="" />
          </div>
          <div className="w-full h-full">
            <img className='w-full h-full object-cover' src={assets.hero_img} alt="" />
          </div>
          <div className="w-full h-full">
            <img className='w-full h-full object-cover' src={assets.hero_img} alt="" />
          </div>
          <div className="w-full h-full">
            <img className='w-full h-full object-cover' src={assets.hero_img} alt="" />
          </div>
          <div className="w-full h-full">
            <img className='w-full h-full object-cover' src={assets.hero_img} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Offers;
