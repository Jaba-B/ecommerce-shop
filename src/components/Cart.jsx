import React, { useState } from 'react'
import { decreaseCart, increaseCart, removeCart } from '../redux/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { BiPlus } from 'react-icons/bi'
import { AiOutlineMinus } from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'

export const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    const dispatch = useDispatch()

    const handleDecreaseCart = (item) => {
        dispatch(decreaseCart(item))
    }

    const handleIncreaseCart = (item) => {
        dispatch(increaseCart(item))
    }

    const handleRemoveCart = (item) => {
        dispatch(removeCart(item))
    }

    return (
        <div className='w-full min-h-screen bg-blue flex flex-col items-center'>
            {cartItems.map((item) => {
                const price = item.price;
                let totalAmount = Math.round(item.itemQuantity*price* 100) / 100
                return(
                    <div key={item.id} className='w-[382px] p-2 bg-blue mb-4'>
                        <div className='w-full h-auto flex flex-col p-2 items-center border-2 border-gold'>
                            <img src={item.image} alt={item.title}  className="w-[200px] h-[200px] my-2"/>
                            <span className='text-lg'>{item.title}</span>
                            <span>{item.category}</span>
                            <div className='flex'>
                                <span className='mr-1'>Price:</span>
                                <span>${price}</span>
                            </div>
                            <div className='flex my-1'>
                                <span>Quantity</span>
                                <BiPlus className='w-6 h-6 mx-1 border border-gold fill-gold bg-inherit hover:fill-white hover:bg-gold cursor-pointer'
                                    onClick={()=> handleIncreaseCart(item)}
                                />
                                <span>{item.itemQuantity}</span>
                                <AiOutlineMinus className='w-6 h-6 mx-1 border border-gold fill-gold bg-inherit hover:fill-white hover:bg-gold cursor-pointer'
                                    onClick={()=> handleDecreaseCart(item)}
                                />
                            </div>
                            <div className='flex mb-2'>
                                <span className='mr-1'>Total Amount:</span>
                                <span>${totalAmount}</span>
                            </div>
                            <button className="flex flex-row justify-center items-center px-1 mt-2 text-white w-auto h-[30px] rounded-2xl bg-turquoise hover:scale-125 transition-all"
                                onClick={() => handleRemoveCart(item)}
                            >
                                <MdOutlineRemoveShoppingCart className='mr-2 pl-1'/>
                                Remove
                            </button>
                        </div>
                    </div>
                )
            })}
            <button className="flex flex-row justify-center items-center px-1 mt-2 text-white w-auto h-[30px] rounded-2xl bg-turquoise hover:scale-125 transition-all">
                <AiOutlineArrowLeft className='mr-2 pl-1'/>
                <Link to={'/products'}>
                    Go Back
                </Link>
            </button>
        </div>
    )
}

export default Cart