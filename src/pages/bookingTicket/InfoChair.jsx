import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteSeat } from '../../redux/reducers/BookingTicketReducer';
import Location from './Location';
import { BiX } from "react-icons/bi";

export default function InfoBookChair() {
    const { arrBookChairs } = useSelector(state => state.BookingTicketReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <h3 className=' text-2xl font-bold text-center border-b-2 border-slate-900'>Thong tin film va so ghe</h3>
            <h3 className='mt-2 font-semibold'>Select Seat</h3>
            <div className='h-40 overflow-auto border-b border-slate-500 pt-2'>
                {arrBookChairs.map((item, index) => {
                    return <div className='flex flex-row mt-1.5 border-b' key={index}>
                        <h3 className='basis-2/3 ml-6 font-semibold'>{item.position}</h3>
                        <div className='basis-1/3'>
                            <button
                                className='ml-11 p-0.5 rounded bg-red-600'
                                onClick={() => {
                                    const action = deleteSeat(item);
                                    dispatch(action);
                                }}
                            >
                                <BiX />
                            </button>
                        </div>
                    </div>
                })}
            </div>
            <Location />
            <div className='flex flex-row pt-2 pb-2'>
                <h3 className='basis-2/3 '>Total</h3>
                <div className='basis-1/3 text-center p-2 font-bold'>
                    1200000 d
                </div>
            </div>
            <button className='display-block text-2xl font-bold text-center bg-rose-500 p-2 w-full hover:bg-rose-700'>
                Booking
            </button>
        </div>
    )
}