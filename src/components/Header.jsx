import React from 'react'

const Header = () => {
    return (
        <header>
            <div className='flex flex-row justify-between text-xs  h-5 items-center w-full'>
                <div>
                    <span className='p-2'>
                        <b>MobileNo:</b>7303678465/8169940998</span>
                    <span className='p-4'>
                        <b>Email:</b>
                        <span className='mailto hover:underline'>
                            <a href='mailto:dhumalmotors1006@gmail.com'>dhumalmotors1006@gmail.com</a>
                        </span>
                    </span>
                </div>
                <div>
                    <span className='px-8'>Total cars in stock :<span className='hover:underline'>
                            <a href='/'>
                                48</a>
                        </span>
                    </span>
                </div>
            </div>

        </header>
    )
}

export default Header
