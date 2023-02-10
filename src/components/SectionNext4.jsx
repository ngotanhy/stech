import React, { useRef } from 'react'
import { Button, Carousel } from "antd";
import img4 from '../assets/img/img4.png';
import ItemNews from './ItemNews';
import { FcNext, FcPrevious } from 'react-icons/fc';

const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,  
  };

  
export default function SectionNext4() {
  const slider = useRef();

  return (
    <div className='container'>
        <div className=''>

            <div className=''>
            <div className='bg-[#f7f7f7] pb-3 pl-3'>
              <div className="flex justify-start py-2 gap-[15rem] ">
                <div className="underline">Ebank</div>
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
              <div className="">
                <Carousel ref={slider} {...settings}>
                  <div>
                    <ItemNews img={img4} content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay ." />
                    <ItemNews img={img4} content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay ." />
                    <ItemNews img={img4} content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay " />
                  </div>
                  <div>
                    <ItemNews img={img4} content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay " />
                    <ItemNews img={img4} content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay " />
                    <ItemNews img={img4} content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay " />
                  </div>
                </Carousel>
              </div>
            </div>

            </div>
        </div>
    </div>
  )
}
