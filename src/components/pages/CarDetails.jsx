import React from 'react'
import { useParams } from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import a from '../../images/2.jpg'
import b from '../../images/3.jpg'
import c from '../../images/4.jpg'
import d from '../../images/5.jpg'


const CarDetails = () => {
  const {carId} = useParams();


  // res = await fetch("http://localhost:3001/cars/carId")
  // res.json()
  const singleCarDetail = {
    name: "DummyCarName",
    description: "CarDescrption",
    image: "/src/images/dummyimg.png",
    price: 500,
    kmsDone:223421,
    year: 2020,
    owner: "First",
    insurance:"Third",
    color:"White",
    fuelType:"Petrol",
regr:"MH 02",
    
  }
  return (
    <div className='flex justify-center pt-8 h-3/4 w-full text-white'>
      <div className='h-full w-full p-4 bg-black'> <h1 className='text-xs'>{singleCarDetail.name}</h1>
      <div className='flex flex-row justify-evenly p-4'>
  <div>
     <ul className='p-4'>
    <li className='flex justify-start lg:p-3'>
    <span>Price(₹)</span><span className="ml-10">{singleCarDetail.price}</span>
  </li>
  <li className='flex justify-start lg:p-3'>
    <span>Year</span><span className="ml-16">{singleCarDetail.year}</span>
  </li>
  <li className='flex justify-start lg:p-3'>
    <span>Owner</span><span className="ml-12">{singleCarDetail.owner}</span>
  </li>
  <li className='flex justify-start lg:p-3'>
    <span>Insurance</span><span className="ml-7">{singleCarDetail.insurance}</span>
  </li>
  </ul>
  </div>
  <div >
    <ul className='p-4'>
    <li className='flex justify-start'>
    <span>Kms</span><span className="ml-9">{singleCarDetail.kmsDone}</span>
  </li>
  <li className='flex justify-start'>
    <span>Fuel</span><span className="ml-10">{singleCarDetail.fuelType}</span>
  </li>
  <li className='flex justify-start'>
    <span>Color</span><span className="ml-8">{singleCarDetail.color}</span>
  </li>
  <li className='flex justify-start'>
    <span>Regr</span><span className="ml-9">{singleCarDetail.regr}</span>
  </li>
   </ul>
  </div>
  </div>
      <div className=" flex h-100 mx-auto justify-center pt-8 bg-black xs:max-sm:hidden">
        <Carousel className="flex justify-center  " width="100%" dynamicHeight={false} autoPlay={true} showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false} >
          <div className='flex justify-center'>
            <img className=" my-auto h-80" src={a}alt="Image1"/>
            <img className=" my-auto h-80" src={b}alt="Image2"/>
            <img className=" my-auto h-80" src={c}alt="Image3"/>
            </div>
        </Carousel>
    </div>
    <div className=" flex h-100 mx-auto justify-center pt-8 bg-black w-full sm:hidden">
        <Carousel className="flex justify-center " width="90%" dynamicHeight={false} autoPlay={true} showThumbs={false} showArrows={false} infiniteLoop={true} showStatus={false} >
          <img className="my-auto h-80 " src={a}  alt="Image1"/>
          <img className="my-auto h-80 " src={b}  alt="Image2"/>
          <img className="my-auto h-80 " src={c} alt="Image3"/>
        </Carousel>
    </div>
    </div>
      </div>
  )
}
{/* <h1 className="text-indigo-600 m-12">Car {carId}</h1> */}
export default CarDetails