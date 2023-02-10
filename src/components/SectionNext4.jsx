import React, { useRef } from 'react'
import { Button, Carousel } from "antd";
import img13 from '../assets/img/img13.png';
import ItemNews from './ItemNews';
import { FcNext, FcPrevious } from 'react-icons/fc';

const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,  
  };



const listItemCa=()=>{
    let list=[]
    for(let i=0 ; i<6; i++){
        list.push([<div className=' w-[260px] py-2 px-2'>
        <img src={img13} alt="img" className='w-[260px] h-[156px]'/>
        <h2 className='font-bold py-2 '>CEO Unilever đặt nhiều kỳ vọng vào thị trường Việt Nam</h2>
    </div>])
    }
    return list;
}

export default function SectionNext4() {
  const slider = useRef();

  return (
    <div className='container'>
        <div className=''>

            <div className='pb-10'>
            <div className='bg-[#f7f7f7] px-4 border'>
              <div className="grid grid-cols-2 py-4 ">
                <div className="underline underline-offset-4 inline-block font-semibold">Thông tin chuyên nghiệp</div>
                <div className="flex gap-2 justify-end items-center">
                  <button
                    className="" onClick={() => slider.current?.prev()}
                  ><FcPrevious className="" />
                  </button>
                  <button
                    className="" onClick={() => slider.current?.next()}
                  ><FcNext />
                  </button>
                </div>
              </div>
              <div className="">
                <Carousel ref={slider} {...settings}>
                   {listItemCa()}
                </Carousel>
              </div>
            </div>

            </div>
        </div>
    </div>
  )
}
