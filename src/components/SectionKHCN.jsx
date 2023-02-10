import React from 'react'
import khcn from "../assets/img/khcn.svg";

import ComponentContaier from './ComponentContaier';

import img7 from "../assets/img/img7.png";
import img8 from "../assets/img/img8.png";
import img9 from "../assets/img/img9.png";
import img10 from "../assets/img/img10.png";

import img20 from "../assets/img/img20.png";
import img21 from "../assets/img/img21.png";
import img22 from "../assets/img/img22.png";
import img223 from "../assets/img/img223.png";


const arrayTitle1 = ["Khoa học", "Việt Nam", "Phát minh", "Ứng dụng", "Thế giới tự nhiên"];
const arrayTitle2=["Số hóa","Công nghệ","Sản phẩm","Blockchain","Vietnam Game","Verse 2023","Startup"]


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
                <div className='border-b-2 pb-4'><ComponentContaier arrTitle={arrayTitle1} underline={0} img1={img7} img2={img8} img3={img9} img4={img10}/></div>
                <div className=''><ComponentContaier arrTitle={arrayTitle2} underline={0} img1={img20} img2={img21} img3={img22} img4={img223}/></div>
            </div>
        </div>
    )
}
