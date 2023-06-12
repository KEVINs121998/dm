import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import a from '../images/2.jpg'
import b from '../images/3.jpg'
import c from '../images/4.jpg'
import d from '../images/5.jpg'



const Carousell = () => {
    
  return (
    <div className=" flex h-80 mx-auto justify-center pt-8 bg-black">
        <Carousel className="flex justify-center " width="75%" dynamicHeight={false} autoPlay={true} showThumbs={false} showArrows={false} infiniteLoop={true} showStatus={false} >
            <img className="my-auto  h-80"  src={a}  alt="Image1" />
      
            <img className="my-auto h-80" src={b}  alt="Image2"/>
        
            <img className="my-auto h-80" src={c} alt="Image3"/>
        
            <img className="my-auto h-80" src={d}  alt="Image3"/>
      
        </Carousel>
    </div>
  )
}

export default Carousell