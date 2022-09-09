import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrBookChairs: [],
}

const BookingTicketReducer = createSlice({
    name: 'BookingTicketReducer',
    initialState,
    reducers: {
        booking: (state, action) => {
            state.arrBookChairs.push(action.payload);
        },
        deleteSeat: (state, action) => {
            state.arrBookChairs = state.arrBookChairs.filter(item => item.position !== action.payload.position);
        }
    }
});

export const { booking, deleteSeat } = BookingTicketReducer.actions

export default BookingTicketReducer.reducer