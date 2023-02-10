import React from 'react'
import car1 from "../assets/img/car1.png"
import car2 from "../assets/img/car2.png"
import car3 from "../assets/img/car3.png"
import car5 from "../assets/img/car5.png"
import panner from "../assets/img/panner.png"
import ComponentContaier from './ComponentContaier'



const arrayTitle = ["Xe","Thị trường","Cầm lái","V-Car","V-Car","Diễn đàn","Video","Cẩm nang mua xe","Thi bằng lái","Mua bán"]

export default function SectionNext2() {

    return (
        <div className='container'>
            <div className='border-b-2 py-4'>
                <ComponentContaier arrTitle={arrayTitle} underline={1} img1={car1} img2={car2} img3={car3} img4={car5}/>
            </div>
            <div className='py-4'>
            <button className='px-4'>
                <img src={panner} alt='img' className='w-full h-full'/>
            </button>
        </div>
        </div>
    )

}
