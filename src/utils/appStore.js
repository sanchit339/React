import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

const appStore = configureStore({
    // adding slice to the store
    reducer :{ // (Singular) this reducer is responsible to modify the appstore
        cart: cartReducer,
        // user: userReducer --> Adding the reducers
    }
});

export default appStore;    