import React from 'react'

export default function Location() {
    return (
        <div className='flex flex-row border-b border-slate-500 pt-2 pb-2'>
            <h3 className='basis-2/3 '>Xuat Chieu</h3>
            <select className='basis-1/3 bg-slate-300 rounded-lg text-center border-none outline-none'>
                <option >
                    11:20 ~ 13:48
                </option>
                <option >
                    14:20 ~ 15:48
                </option>
                <option >
                    16:20 ~ 18:48
                </option>
            </select>
        </div>
    )
}
