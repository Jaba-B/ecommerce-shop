import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    qty: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if(itemIndex >= 0) {
                state.cartItems[itemIndex].itemQuantity += 1;
                state.qty += 1;
            } else {
                const product = {...action.payload, itemQuantity: 1};
                state.cartItems.push(product);
                state.qty += 1;
            }
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (state.cartItems[itemIndex].itemQuantity > 1) {
                state.cartItems[itemIndex].itemQuantity -= 1;
                state.qty -= 1
            } else if (state.cartItems[itemIndex].itemQuantity === 1) {
                state.cartItems.splice(itemIndex, 1)
                state.qty -= 1
            }
        },
        increaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            state.cartItems[itemIndex].itemQuantity += 1;
            state.qty += 1
        },
        removeCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            state.qty -= state.cartItems[itemIndex].itemQuantity;
            state.cartItems.splice(itemIndex, 1);
        }
    }
});

export const { addToCart, decreaseCart, increaseCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;