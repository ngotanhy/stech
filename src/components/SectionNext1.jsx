import React from 'react'
import ComponentContaier from './ComponentContaier';
import img7 from "../assets/img/img7.png";
import img8 from "../assets/img/img8.png";
import img9 from "../assets/img/img9.png";
import img10 from "../assets/img/img10.png";


const arrayTitle = ["Du lịch", "Điểm đến", "Ẩm thực", "Dấu chân", "Tư vấn", "Cẩm nang", "Ảnh"]
export default function SectionNext1() {
    return (
        <div className='container'>
            <div className='border-b-2 py-4'>
                <ComponentContaier arrTitle={arrayTitle } underline={1} img1={img7} img2={img8} img3={img9} img4={img10} />
            </div>
        </div>
    )
}
