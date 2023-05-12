import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./BasketReducer.js";
import productsListReducer from "./ListReducer.js";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        productsList: productsListReducer
    }
})