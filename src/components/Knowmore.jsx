import React from 'react'

const Knowmore = () => {
    return (
        <div className=" bg-black flex justify-center lg:px-48  sm:py-20 sm:px-20 xs:pt-10 sm:pt-10 xs:px-14 md:px-36 ">
            <div className="bg-gray-700 text-white text-center lg:h-80 lg:px-10 bg-cover bg-opacity-80 bg-center s:w-auto "
                style={
                    {
                        backgroundImage: 'url(https://wallpaperaccess.com/full/13672.jpg)',
                        opacity: '1',
                        backgroundBlendMode: 'multiply'
                    }
            }>
                <h1 className='pt-10'>WELCOME TO DHUMAL MOTORS</h1>
                <p className='text-center font-extrabold pb-6'>____________________</p>
                <p className='px-20 pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, magni quis illo dolor incidunt modi commodi nulla ipsa harum quos excepturi ipsum fugiat assumenda nisi, asperiores quam sapiente! Velit, reiciendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, magni quis illo dolor incidunt modi commodi nulla ipsa harum quos excepturi ipsum fugiat assumenda nisi
                </p>
                <div className='pt-10 xs:pb-5'>
                    <button type="button" className="text-white hover:text-white border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-500  dark:hover:text-white dark:hover:bg-gray-400 dark:focus:ring-gray-600">
                        <a href='/about-us'>Know More</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Knowmore
