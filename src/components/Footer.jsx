import React from 'react'
import {FaFacebookSquare, FaInstagram ,FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-row items-center float-right'>
            Follow US: <div className='px-4 flex flex-row justify-around '>
                <a className='' href='https://www.facebook.com/DHUMALMOTORZ' target='_blank'><FaFacebookSquare size={30}/></a>
                <a href='http://wa.me/+0917303678465' target='_blank'><FaWhatsapp size={30}/></a>
                <a href='https://instagram.com/dhumalmotors?igshid=MmJiY2I4NDBkZg==' target='_blank'><FaInstagram size={30}/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer