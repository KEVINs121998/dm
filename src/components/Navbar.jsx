import React, {useState} from 'react'
import dm from '../images/dm.jpeg'
import { Link } from 'react-router-dom'

const NAV_ITEMS = [
  {"name": "Home", "path": "/"},
  {"name": "Car Stock", "path": "/carstock"},
  {"name": "Sell Car", "path": "/sellcar"},
  {"name": "Services", "path": "/services"},
  {"name": "About Us", "path": "about-us"},
  {"name": "Contact Us", "path": "/contact-us"}]


const Navbar = () => {
  const [selectedNavElement, setSelecetedNavElement] = useState()

  function clickedNav(i) {
    setSelecetedNavElement(i);
  }
  console.log(`selectedNavElement = `)
  if (selectedNavElement) {
    console.log(selectedNavElement)
  }

  return (
    <div className='flex justify-between h-20 text-center bg-black text-white w-full sm:w-full'>
        <div className=' flex items-center pl-10'><a href='/'><img className='w-20 h-15' src={dm} alt='logo'/></a></div>
        <ul className='float-right flex'>
            {NAV_ITEMS.map((item, i) => (
              <li key={i} className={`hover:font-bold hover:bg-gray-600 hover:text-red-500 hover:cursor-pointer h-full flex items-end px-2 pb-4 border-x-white ${(selectedNavElement === i) ? 'bg-gray-800' : ''}`}><Link to={item.path} onClick={(e) => clickedNav(e)} >{item.name}</Link></li>
            ))}
        </ul>         
    </div>
  )
}

export default Navbar