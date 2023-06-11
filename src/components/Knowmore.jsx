import React from 'react'
import cars from '../images/car.jpg'

const Knowmore = () => {
    return (
        <div className="flex justify-center py-20 px-60">
            <div className='bg-black text-white text-center'>
                <h1>WELCOME TO DHUMAL MOTORS</h1>
             <p className='text-center font-extrabold pb-6'>____________________</p>
                <p className='px-4 pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, magni quis illo dolor incidunt modi commodi nulla ipsa harum quos excepturi ipsum fugiat assumenda nisi, asperiores quam sapiente! Velit, reiciendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, magni quis illo dolor incidunt modi commodi nulla ipsa harum quos excepturi ipsum fugiat assumenda nisi </p>
                <div className='pb-6'>
                <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"><a href='/about-us'>Know More</a></button>
                </div>
            </div>
        </div>
    )
}

export default Knowmore
