import React from 'react'
import khcn from "../assets/img/khcn.svg";

import ComponentContaier from './ComponentContaier';




const arrayTitle1 = ["Khoa học", "Việt Nam", "Phát minh", "Ứng dụng", "Thế giới tự nhiên"];



// export const ComponentContaier = (arrTitle) => {
//     return
// }

export default function SectionKHCN() {
    return (
        <div className='container '>
            <div className='border-2 py-4 mt-4 px-3 bg-[#FCFAF6]'>
                <div className='flex justify-start items-center gap-20'>
                    <h1 className='text-2xl font-bold text-amber-500'>Khoa học - Công nghệ</h1>
                    <a href='#'> <img src={khcn} alt='khcn' /></a>
                </div>
                <div className='border-b-2 pb-4'><ComponentContaier arrTitle={arrayTitle1} underline={0}/></div>
                <div className=''><ComponentContaier arrTitle={arrayTitle1} underline={0}/></div>
            </div>
        </div>
    )
}
