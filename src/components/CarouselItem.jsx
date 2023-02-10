import { Carousel } from 'antd'
import React, { useRef } from 'react'
import { FcNext, FcPrevious } from 'react-icons/fc'
import ItemNews from './ItemNews';
import img45 from "../assets/img/45.png"
import img46 from "../assets/img/46.png"
import img4 from "../assets/img/img4.png"

const settings = {
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
};

export default function CarouselItem() {
  const slider = useRef();

  return (
    <div className=''>
    <div className="grid grid-cols-2 py-3">
      <div className="underline underline-offset-4 inline-block font-semibold">Thông tin chuyên nghiệp</div>
      <div className="flex gap-2 justify-end items-center relative z-10">
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
    <div className="px-2">
      <Carousel ref={slider} {...settings}>
        <div>
          <ItemNews img={img4} content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay ." />
          <ItemNews img={img4} content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay ." />
        </div>
        <div>
          <ItemNews img={img45} content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay " />
          <ItemNews img={img4} content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay " />
        </div>
        <div>
          <ItemNews img={img46} content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay " />
          <ItemNews img={img45} content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay " />
        </div>
        <div>
          <ItemNews img={img4} content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay " />
          <ItemNews img={img46} content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay " />
        </div>
        <div>
          <ItemNews img={img45} content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay " />
          <ItemNews img={img4} content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay " />
        </div>
      </Carousel>
    </div>
  </div>
  )
}
