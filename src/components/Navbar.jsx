import React from 'react'
import image from '../images/1.jpg'

const Navbar = () => {
  return (
    <div className='grid-12 justify-between h-20 text-center bg-red-900 text-white '>
        <div className='float-left'><img className='w-40 h-12 pl-20' src={image} alt='imgsd'/></div>
        <ul className=' float-right flex flex-row py-6'>
            <li><a>Home </a></li>
            <li> Car Stock  </li>
            <li> Sell Car   </li>
            <li> Services   </li>
            <li> About Us  </li>
            <li> Contact Us </li>
        </ul>
    </div>
  )
}

export default Navbar