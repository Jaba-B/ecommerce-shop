import { createSlice } from '@reduxjs/toolkit';
import { cartProducts } from '../components/Cart'

const initialState = {
    cartItems: [],
    qty: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.qty++;
            state.cartItems.push(action.payload);
        }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;