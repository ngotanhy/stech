import { configureStore } from "@reduxjs/toolkit";
import BookingTicketReducer from "./reducers/BookingTicketReducer";

export const store = configureStore({
    reducer: {
        BookingTicketReducer: BookingTicketReducer
    }
})

