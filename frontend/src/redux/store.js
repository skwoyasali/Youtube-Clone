import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./search.js";


const store = configureStore({
    reducer:{
       Search :SearchReducer
    }

});


export default store;