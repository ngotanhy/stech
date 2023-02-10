import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import useScroll from '../Hooks/UseScroll'

const arr1 = ["Thời sự", "Chính trị", "Dân sinh", "Lao động - Việc làm", "Giao thông"]
const arr2 = ["Du lịch", "Điểm đến", "Ẩm thực", "Dấu chân", "Tư vấn", "Cẩm nang", "Ảnh"]
const arr3 = ["Thời sự", "Chính trị", "Lao động - việc làm", "Dân sinh"]
const arr4 = ["Kinh Doanh", "Doanh Nghiệp", "Chứng khoáng", "Bất Động sản", "Bảo hiểm"];
const arr5 = ["Sức khỏe", "Tin tức", "Dinh dưỡng", "Khỏe đẹp", "Các bệnh", "Vaccine", "Di chứng Covid"];
const arr6 = ["Thời sự", "Chính trị", "Dân sinh", "Lao động - Việc làm", "Giao thông"]
const arr7 = ["Giáo dục","Tin tức","Tuyển sinh","Chân dung","Du học","Giáo dục 4.0","Trắc nghiệm"]
const arr8 = ["Thời sự", "Chính trị", "Dân sinh", "Lao động - Việc làm", "Giao thông"]


const arrT1=["Podcasts","Ảnh","Infographics"]

export default function PopUpNav({ isOpen, setIsOpen }) {
    const scroll = useScroll()

    const renderRow = (arr) => {
        return <ul>
            {arr?.map((item, index) => {
                if (index == 0) {
                    return <li className='text-lg text-red-700 font-bold hover:underline hover:underline-offset-4' key={index}>{item}</li>
                } else {
                    return <li key={index}>{item}</li>
                }
            })}
        </ul>
    }

    return (
        <div className={isOpen ? `h-[460px] fixed top-[59px] bg-white left-0 border` : "none"} style={{ left: "50%", transform: "translateX(-50%)" }}>
            <div className='container'>
                <div className='flex justify-around gap-[50rem] pt-3 border-b-2 pb-2'>
                    <h2 className='flex justify-start'>Tất cả chuyên mục </h2>
                    <button className='flex justify-end items-center text-blue-600'
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    ><span>Đóng</span> <span className='pl-3 text-xl'><AiOutlineClose className='text-blue-600' /></span></button>
                </div>
                <div className='grid grid-cols-7 '>
                    <div className='col-span-6 border-r-2 overflow-y-auto h-[410px] mt-4'>
                        <div className='grid grid-cols-6 gap-3 '>
                            <div className='border-b-2'>{renderRow(arr1)}</div>
                            <div className='border-b-2'>{renderRow(arr2)}</div>
                            <div className='border-b-2'>{renderRow(arr3)}</div>
                            <div className='border-b-2'>{renderRow(arr4)}</div>
                            <div className='border-b-2'>{renderRow(arr5)}</div>
                            <div className='border-b-2'>{renderRow(arr6)}</div>
                            <div className='border-b-2'>{renderRow(arr7)}</div>
                            <div className='border-b-2'>{renderRow(arr8)}</div>
                            <div className='border-b-2'>{renderRow(arr1)}</div>
                            <div className='border-b-2'>{renderRow(arr2)}</div>
                            <div className='border-b-2'>{renderRow(arr3)}</div>
                        </div>
                    </div>
                    <div className='col-span-1 overflow-y-auto h-[410px] pl-3'>
                        <div className=' '>
                        <div>{renderRow(arr1)}</div>
                            <div className='border-b-2'>{renderRow(arrT1)}</div>
                            <div className='border-b-2'>{renderRow(arr1)}</div>
                            <div className='border-b-2'>{renderRow(arr1)}</div>
                            <div className='border-b-2'>{renderRow(arr1)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
