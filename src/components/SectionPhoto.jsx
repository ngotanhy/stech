import React, { useRef } from 'react'
import ListItemTiltle from './ListItemTiltle'

import panner from "../assets/img/panner.png"


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
                </div>
                <div className="" >
                    <Swiper
                    direction={"vertical"}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                      }}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                    </Swiper>
                </div> */}
                <button className=''>
                <img src={panner} alt='img' className='w-full h-full'/>
            </button>
            </div>
        </div>
    )
}
