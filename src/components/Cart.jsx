import React from 'react'
import { useSelector } from 'react-redux'

export const Cart = () => {
const cartItems = useSelector((state) => state.cart.cartItems)


    return (
        <div>
            {cartItems.map((item) => {
                return(
                    <p>{item.title}</p>
                )
            })}
        </div>
    )
}

export default Cart