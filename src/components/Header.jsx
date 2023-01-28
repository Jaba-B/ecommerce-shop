import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header () {
    return(
        <div className='w-full h-[100px] bg-blue border-b-2 border-b-grey flex items-center'>
            <div className='flex mx-2 w-full justify-between sm:justify-evenly items-center'>
                <p className='text-gold text-2xl font-semibold'>Logo</p>
                <div className='flex justify-center items-center'>
                    <Link to={'products'} className="text-gold text-lg after:content-[''] after:block after:rounded-2xl after:h-[2px] after:w-0 after:mx-auto after:duration-300 after:hover:w-full after:bg-gold mr-2 md:mr-6 lg:mr-10">Products</Link>
                    <Link to={'feedbacks'} className="text-gold text-lg after:content-[''] after:block after:rounded-2xl after:h-[2px] after:w-0 after:mx-auto after:duration-300 after:hover:w-full after:bg-gold">Feedbacks</Link>
                </div>
                <button className='group flex justify-center items-center text-gold p-1 border-[1px] border-gold hover:bg-gold hover:text-white'><FaShoppingCart className='fill-gold mr-1 group-hover:fill-white'/>Cart (0)</button>
            </div>
        </div>
    )
}

export default Header