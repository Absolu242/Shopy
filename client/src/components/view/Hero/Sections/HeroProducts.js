import React from 'react'
import Slider from "react-slick";
import store from '../../../data/store';
import HeroProduct from './Sections/HeroProduct'




function Hero() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <Slider {...settings} style={{width:'100%',height:'100vh'}}>
            {store.kit
                .filter((item,limit) => limit < 4)
                .map(item =>(
                    <HeroProduct key={item.id} item={item}/>
                ))}
        </Slider>
    )
}


