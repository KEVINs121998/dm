import React from 'react'

const Services = () => {
    return (
        <div className='px-8 py-10 border-3'>
            <div className='flex flex-col justify-center bg-black text-left text-white pl-10 py-6 pr-8 '>
                <h1 className='pb-2 font-bold text-xl'>SERVICES</h1>
                <ol className=' list-decimal	'>
                    <li className='text-xs pb-3'>Buying and Selling Of Used Cars</li>
                    <li className='text-xs pb-3'>Loan</li>
                    <li className='text-xs pb-3'>Insurance</li>
                    <li className='text-xs pb-3'>
                        RTO Services</li>
                </ol>
            </div>
        </div>
    )
}

export default Services
