import { configureStore } from "@reduxjs/toolkit";
import BookChairReducer from "./reducers/BookChairReducer";

export const store = configureStore({
    reducer: {
        BookChairReducer: BookChairReducer
    }
})

