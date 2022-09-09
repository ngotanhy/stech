import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { booking } from '../../redux/reducers/BookingTicketReducer';

export default function Seats({ arrSeats }) {
    const { arrBookChairs } = useSelector(state => state.BookingTicketReducer);
    const dispatch = useDispatch();


    const renderSeats = () => {
        return arrSeats.map((rowSeat, index) => {
            return rowSeat.listChairs.map((item, index) => {
                for (let i = 0; i < arrBookChairs.length; i++) {
                    let itemBook = arrBookChairs[i];
                    if (itemBook.position === item.position) {
                        item = itemBook;
                    }
                }
                return <div key={index} className=' border-spacing-1 border hover:bg-slate-100 rounded text-center m-1 overflow-hidden'>
                    <button
                        disabled={item.isEmpty ? true : false}
                        className={item.isEmpty ? 'bg-green-500 w-full h-full border-spacing-1' : ' w-full'}
                        onClick={() => {
                            const action = booking({ ...item, isEmpty: true });
                            dispatch(action);
                        }}
                    >
                        {item.position}
                    </button>
                </div>
            })
        })
    }

    return (
        <>
            {renderSeats()}
        </>
    )
}
