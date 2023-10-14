import { createSlice } from "@reduxjs/toolkit";
// import { Toast } from "react-hot-toast";

const initialState = {
    totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0

}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        setTotalItems(state, value) {
            state.cart = value.payload;
        },

        //Add to cart
        //removeCart
        //resetCard
    }
})

export const { setTotalItems } = cartSlice.actions;
export default cartSlice.reducer;