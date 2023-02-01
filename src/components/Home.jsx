import React from 'react'
import { Carousel } from './Carousel'
import { Chart } from './Chart'

function Home () {
    const userName = localStorage.getItem('userName');

    return (
        <div className='w-full flex flex-col items-center px-2 min-h-screen bg-blue'>
            <p className='text-2xl text-center align middle py-10'>Welcome {userName}</p>
            <p className='text-xl text-center align middle py-6'>Checkout most demanded products of last month</p>
            <div>
                <Carousel />
            </div>
            <p className='text-xl text-center align middle mt-[100px]'>Statistic of Our visitors of last year</p>
            <div className='w-full flex justify-center items-center my-6 ml-[-5px]'>
                <Chart />
            </div>
        </div>
    )
}

export default Home