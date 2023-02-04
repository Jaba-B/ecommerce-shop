import React from 'react'
import { useSelector } from 'react-redux'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header () {
    const qty = useSelector((state) => state.cart.qty)

    return(
        <div className='w-full h-[150px] sm:h-[100px] bg-blue border-b-2 border-b-grey flex items-center'>
            <div className='flex flex-col sm:flex-row h-full justify-evenly mx-2 w-full sm:justify-evenly items-center'>
                <p className='text-gold text-2xl font-semibold'>Logo</p>
                <div className='w-[230px] flex justify-between items-center'>
                    <Link to={'/home'} className="text-gold text-lg after:content-[''] after:block after:rounded-2xl after:h-[2px] after:w-0 after:mx-auto after:duration-300 after:hover:w-full after:bg-gold">Home</Link>
                    <Link to={'/products'} className="text-gold text-lg after:content-[''] after:block after:rounded-2xl after:h-[2px] after:w-0 after:mx-auto after:duration-300 after:hover:w-full after:bg-gold">Products</Link>
                    <Link to={'/feedbacks'} className="text-gold text-lg after:content-[''] after:block after:rounded-2xl after:h-[2px] after:w-0 after:mx-auto after:duration-300 after:hover:w-full after:bg-gold">Feedbacks</Link>
                </div>
                <button className='group flex justify-center items-center text-gold p-1 border-[1px] border-gold hover:bg-gold hover:text-white'><FaShoppingCart className='fill-gold mr-1 group-hover:fill-white'/>Cart ({qty})</button>
            </div>
        </div>
    )
}

export default Header