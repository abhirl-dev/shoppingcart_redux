import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialValue,
    reducers: {
        addToCart: addCart,
        deleteCart: deleteObj
    },
});

function addCart(state, action) {
    const i = state.cart.findIndex(temid => temid.id === action.payload.id);
    if (i !== -1) {
        state.cart[i].count += action.payload.count;
        state.cart[i].sum += action.payload.sum;
    } else {
        state.cart.push(action.payload);
    }
}

function deleteObj(state, action) {
    const i = state.cart.findIndex(temid => temid.id === action.payload);
    if (i !== -1) {
        state.cart.pop(i, 1);
    }
}


export default cartSlice.reducer;
export const { addToCart, deleteCart } = cartSlice.actions;
