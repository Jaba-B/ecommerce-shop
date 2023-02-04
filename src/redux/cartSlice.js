import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    qty: 0
}

let cart = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment(state, action) {
            state.qty++;
            cart.push(action.payload)
        }
    }
});

export const { increment } = cartSlice.actions;
export default cartSlice.reducer;