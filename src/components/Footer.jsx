import React from 'react'
import {FaFacebookSquare, FaInstagram, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='fixed bottom-0 right-0 left-0 items-center xs:w-100 bg-red-600 z-10'>

            <div className=' flex h-20 items-end justify-end'>
                    <div className='absolute inset-x-0 bottom-0 text-sm text-center dark:text-black'>© Dhumal Motors™. All Rights Reserved.</div>
                    <div className='flex flex-row py-5'>
                        Follow Us:
                        <div className='flex flex-row'>
                            <a className='px-2' href='https://www.facebook.com/DHUMALMOTORZ' target='_blank'><FaFacebookSquare size={25}/></a>
                            <a className='px-2' href='http://wa.me/+917303678465' target='_blank'><FaWhatsapp size={25}/></a>
                            <a className='px-2' href='https://instagram.com/dhumalmotors?igshid=MmJiY2I4NDBkZg==' target='_blank'><FaInstagram size={25}/></a>
                        </div>
                    </div>
            </div>

        </footer>
    )
}

export default Footer
