import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice";
let store=configureStore({
    reducer:todoReducer
})


export default store;