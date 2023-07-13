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
    <div className='flex justify-center pt-8 h-3/4 w-full text-white lg:p-10'>
      <div className='h-full w-full p-4 bg-black lg:pb-34 xs:pb-10'> <h1 className='text-xs lg:text-2xl lg:p- lg:pl-8 lg:pb-10 '>{singleCarDetail.name}</h1>
      <div className='flex flex-row justify-evenly p-4'>
  <div className=' w-1/2  border-2'>
     <ul className='p-4 lg:text-2xl'>
    <li key={1} className='flex justify-between lg:p-3 '>
    <span>Price(₹) -</span><span className="ml-10 xs:ml-8 lg:ml-32">{singleCarDetail.price}</span>
  </li>
  <li key={2} className='flex justify-between lg:p-3 xs:py-3'>
    <span>Year -</span><span className="ml-16 xs:ml-12 lg:ml-40">{singleCarDetail.year}</span>
  </li>
  <li key={3} className='flex justify-between lg:p-3 xs:py-3'>
    <span>Owner -</span><span className="ml-12 xs:ml-10 lg:ml-36">{singleCarDetail.owner}</span>
  </li>
  <li key={4} className='flex justify-between lg:p-3 xs:py-3'>
    <span>Insurance -</span><span className="ml-7 xs:ml-3 lg:ml-28">{singleCarDetail.insurance}</span>
  </li>
  </ul>
  </div>
  <div  className='w-1/2  border-2'>
    <ul className='p-4 lg:text-2xl'>
    <li key={1} className='flex justify-between lg:p-3'>
    <span>Kms -</span><span className="ml-9 xs:ml-8 lg:ml-32">{singleCarDetail.kmsDone}</span>
  </li>
  <li key={2} className='flex justify-between lg:p-3 xs:py-3'>
    <span>Fuel -</span><span className="ml-10 lg:ml-32">{singleCarDetail.fuelType}</span>
  </li>
  <li key={3} className='flex justify-between lg:p-3 xs:py-3'>
    <span>Color -</span><span className="ml-8 lg:ml-28">{singleCarDetail.color}</span>
  </li>
  <li key={4} className='flex justify-between lg:p-3 xs:py-3'>
    <span>Regr -</span><span className="ml-9 lg:ml-32">{singleCarDetail.regr}</span>
  </li>
   </ul>
  </div>
  </div>
      <div className=" flex h-100 mx-auto justify-center pt-8 bg-black xs:max-sm:hidden">
        <Carousel className="flex justify-center  " width="100%" dynamicHeight={false} autoPlay={true} showThumbs={false}  infiniteLoop={true} showStatus={false} >
          <div className='flex justify-center'>
            <img className=" my-auto h-80" src={a}alt="Image1"/>
            <img className=" my-auto h-80" src={b}alt="Image2"/>
            <img className=" my-auto h-80" src={c}alt="Image3"/>
            </div>
            <div className='flex justify-center'>
            <img className=" my-auto h-80" src={a}alt="Image1"/>
            <img className=" my-auto h-80" src={b}alt="Image2"/>
            <img className=" my-auto h-80" src={c}alt="Image3"/>
            </div>
        </Carousel>
    </div>
    <div className=" flex h-100 mx-auto justify-center pt-8 bg-black w-full sm:hidden">
        <Carousel className="flex justify-center " width="90%" dynamicHeight={false} autoPlay={true} showThumbs={false}  infiniteLoop={true} showStatus={false} >
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