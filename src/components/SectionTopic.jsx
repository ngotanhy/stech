import React from 'react'
import { FiTrendingUp } from 'react-icons/fi'
import panner from "../assets/img/panner.png";

const ItemTiltle=["Mỹ bắn hạ khí cầu Trung Quốc","Động đất ở Thổ Nhĩ Kỳ, Syria","Siêu AI ChatGPT"]

export default function SectionTopic() {
  return (
    <div className='container'>
        <div className='py-4 border-b-2'>
            <div className='flex items-center justify-start gap-7'>
                <button className='flex items-center gap-3'> <FiTrendingUp/>Chủ đề</button>
                {ItemTiltle.map((item,index)=>{
                    return <button className='underline text-red-700 text-sm font-semibold' key={index}>
                        {item}
                    </button>
                })}
            </div>
        </div>
        <div className='py-4'>
            <button className='px-4'>
                <img src={panner} alt='img' className='w-full h-full'/>
            </button>
        </div>
    </div>
  )
}
