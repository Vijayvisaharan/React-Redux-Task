import { createSlice } from "@reduxjs/toolkit";
import productData from "../data/productData";


const initialState = {
    cart: [],
    items: productData,
    totalQuantity: 5,
    totalPrice: 3476,
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            recalculateTotals(state);
        },

        increaseItemQuantity: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: (item.quantity || 1) + 1 };
                }

                return item;
            });
            recalculateTotals(state)
        },
        decreaseItemQuantity: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload && item.quantity > 0) {
                    return { ...item, quantity: item.quantity - 1 };
                }

                return item;
            });
            recalculateTotals(state)
        },
    },
});
const recalculateTotals = (state) => {
    state.totalQuantity = state.items.reduce((total, item) => total + (item.quantity || 1), 0);
    state.totalPrice = state.items.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
};


export const {
    totalQuantity,
    totalPrice,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;