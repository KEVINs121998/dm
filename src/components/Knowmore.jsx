import React from 'react'

const Knowmore = () => {
    return (
        <div className="flex justify-center sm:py-20 sm:px-48 ">
            <div className=" bg-black text-white text-center bg-cover bg-opacity-80 bg-center "  style={{ backgroundImage: 'url(https://wallpaperaccess.com/full/13672.jpg)',opacity: '1',
        backgroundBlendMode: 'multiply' }} >
                <h1>WELCOME TO DHUMAL MOTORS</h1>
             <p className='text-center font-extrabold pb-6'>____________________</p>
                <p className='px-4 pb-10 sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, magni quis illo dolor incidunt modi commodi nulla ipsa harum quos excepturi ipsum fugiat assumenda nisi, asperiores quam sapiente! Velit, reiciendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, magni quis illo dolor incidunt modi commodi nulla ipsa harum quos excepturi ipsum fugiat assumenda nisi </p>
                <div className='pb-6'>
                <button type="button" className="text-gray-700 hover:text-white border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-400 dark:focus:ring-gray-600"><a href='/about-us'>Know More</a></button>
                </div>
            </div>
        </div>
    )
}

export default Knowmore
