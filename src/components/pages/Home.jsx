import React from 'react'
import Knowmore from '../Knowmore';
import { Link } from 'react-router-dom'
import Carousell from '../Carousell';

const Home = () => {
    const cars = [1,2,3,4,5,6,7,8,9,10];
    return (
        <div className='bg-black text-white pb-28'>
            <Carousell/>
            <div className="mx-20 flex gap-5 my-24">
        {
          cars.map((car, i) => {
            return (
              <Link key={i} target='_blank' to={`cars/${car}`}>Car {car}</Link>
            )
          })
        }
      </div>
            <Knowmore/>
        </div>
    )
}

export default Home
