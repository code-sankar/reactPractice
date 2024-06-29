import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feature/todo/TodoSlice';

export const store = configureStore({
    reducer: todoReducer
})

