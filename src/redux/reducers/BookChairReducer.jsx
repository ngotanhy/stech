import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrBookChairs: []
}

const BookChairReducer = createSlice({
    name: 'BookChairReducer',
    initialState,
    reducers: {
        bookChair: (state, action) => {
            let arrBookChairsNew = [...state.arrBookChairs];
            let payload = { ...action.payload }
            payload.isEmpty = true;
            arrBookChairsNew.push(payload);
            state.arrBookChairs = arrBookChairsNew;
        },
        deleteSeat : (state, action) => {
            let arrBookChairsNew = [...state.arrBookChairs];
            arrBookChairsNew.filter(item => item.position !== action.payload.position);
            state.arrBookChairs = arrBookChairsNew;
        }
    }
});

export const { bookChair,deleteSeat } = BookChairReducer.actions

export default BookChairReducer.reducer