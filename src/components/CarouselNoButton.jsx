import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";


import ItemNews from './ItemNews';
import img45 from "../assets/img/45.png"
import img46 from "../assets/img/46.png"
import img4 from "../assets/img/img4.png"



const renderItem=()=>{
  return <div className="flex justify-start">
  <img src={img4} alt='img' className='w-[500px] h-[300px]' />
  <div className="">
      <h2 className='text-xl font-semibold flex justify-start'>Dùng tia vũ trụ 'quét' tường thành 700 năm</h2>
      <p className='text-xs'>Các nhà nghiên cứu Trung Quốc phát hiện những đoạn có mật độ bất thường trên tường thành nhà Minh do hoàng đế Chu Nguyên Chương xây dựng. </p>
  </div>
</div>
}

export default function CarouselNoButton() {
    const slider = useRef();

    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper h-[200px]">
            <SwiperSlide>
                {renderItem()}
            </SwiperSlide><SwiperSlide>
                {renderItem()}
            </SwiperSlide><SwiperSlide>
                {renderItem()}
            </SwiperSlide>
            <SwiperSlide>
                {renderItem()}
            </SwiperSlide>
        </Swiper>
    )
}
