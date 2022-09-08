import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bookChair } from '../../redux/reducers/BookChairReducer';

export default function Seats(props) {

    const { arrBookChairs } = useSelector(state => state.BookChairReducer);

    let dispatch = useDispatch();

    const updateArrSeats = (arrSeats) => {
        for (let i = 0; i < arrBookChairs.length; i++) {
            for (let j = 0; j < arrSeats.length; j++) {
                if (arrBookChairs[i].position == arrSeats[j].position) {
                    arrSeats[j].isEmpty = true;
                }
            }
        }
    }

    const renderSeats = () => {
        updateArrSeats(props.arrSeats);
        return props.arrSeats.map((item, index) => {
            return <div key={index} className='border border-spacing-1  hover:bg-slate-100 rounded text-center m-1'>
                <button 
                disabled={item.isEmpty ? true : false}
                    className={item.isEmpty ? 'bg-red-700 w-full rounded' : ' w-full'}
                    onClick={() => {
                        const action = bookChair(item);
                        dispatch(action);
                    }}
                >
                    {item.position}
                </button>
            </div>
        })

    }

    return (
        <>
            {renderSeats()}
        </>
    )
}
