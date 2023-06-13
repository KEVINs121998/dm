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
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className='bg-black text-white'>
        <div className=' max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'><a className='flex items-center' href='/'><img className='h-15 w-20' src={dm} alt='logo'/></a>
        <button onClick={() => setNavbar(!navbar)} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className={`${navbar ? "block" : "hidden"} md:block w-full md:w-auto`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
            {NAV_ITEMS.map((item, i) => (
              <li key={i} className="hover:font-bold hover:text-red-500 hover:cursor-pointer h-full flex items-end px-2 pb-4 border-x-white}"><Link onClick={() => setNavbar(!navbar)} to={item.path}>{item.name}</Link></li>
            ))}
        </ul> 
         </div>

        </div>
        </nav>       
    </div>
  )
}



export default Navbar