import React, { useRef, useState } from "react";
import ListItemTiltle from './ListItemTiltle'

import panner from "../assets/img/panner.png"



// const renderItem=()=>{
//     return <div className="flex justify-start">
//     <img src={img4} alt='img' className='w-[500px] h-[300px]' />
//     <div className="">
//         <h2 className='text-xl font-semibold flex justify-start'>Dùng tia vũ trụ 'quét' tường thành 700 năm</h2>
//         <p className='text-xs'>Các nhà nghiên cứu Trung Quốc phát hiện những đoạn có mật độ bất thường trên tường thành nhà Minh do hoàng đế Chu Nguyên Chương xây dựng. </p>
//     </div>
//   </div>
//   }

export default function SectionPhoto() {

    const slider = useRef();

    return (
        <div className='container'>
            <div className='border-b-2 py-4'>
                <ListItemTiltle arrayTitle={["Ảnh"]} underline={1} />
                {/* <div className=''>
                    <div className="flex gap-2">
                        <button
                            className="" onClick={() => slider.current?.prev()}
                        ><FcPrevious className="" />
                        </button>
                        <button
                            className="" onClick={() => slider.current?.next()}
                        ><FcNext />
                        </button>
                    </div>
                </div> */}
                {/* <div className="" >
                    <Swiper
                        direction={"vertical"}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                           <SwiperSlide>
                {renderItem()}
            </SwiperSlide>
            <SwiperSlide>
                {renderItem()}
            </SwiperSlide>
            <SwiperSlide>
                {renderItem()}
            </SwiperSlide>
                    </Swiper>
                </div> */}
                <button className=''>
                    <img src={panner} alt='img' className='w-full h-full' />
                </button>
            </div>
        </div>
    )
}
