import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import a from '../images/2.jpg'
import b from '../images/3.jpg'
import c from '../images/4.jpg'
import d from '../images/5.jpg'



const Carousell = () => {
    
  return (
    <div className=" flex w-3/4 h-1/2 mx-auto justify-center border-2 ">
        <Carousel width="500px" dynamicHeight={false} autoPlay={true} showThumbs={false} showArrows={false} infiniteLoop={true} showStatus={false}>
        
            <img class="object-contain" src={b}  alt="Image1"/>
        
            <img class="object-contain" src={b}  alt="Image2"/>
        
            <img class="object-contain" src={b} alt="Image3"/>
        
            <img class="object-contain" src={d}  alt="Image3"/>
            <img class="object-contain" src={d}  alt="Image3"/>
        </Carousel>
    </div>
  )
}

export default Carousell