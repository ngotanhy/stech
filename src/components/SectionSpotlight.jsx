import React, { useRef } from 'react'
import ListItemTiltle from './ListItemTiltle'
import img40 from "../assets/img/img40.png"
import { BiComment } from 'react-icons/bi'
import { Button, Carousel } from "antd";
import { FcNext, FcPrevious } from 'react-icons/fc';
import img45 from "../assets/img/45.png"
import img46 from "../assets/img/46.png"
import img4 from "../assets/img/img4.png"

import img13 from "../assets/img/img13.png"
import { BsClock } from 'react-icons/bs';
import ItemNews from './ItemNews';
import CarouselItem from './CarouselItem';
import panner2 from "../assets/img/pannner2.png";

const settings = {
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
};
const settings1 = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const listItemCa = () => {
  let list = []
  for (let i = 0; i < 6; i++) {
    list.push([<div className=' w-[260px] py-2 px-2'>
      <img src={img13} alt="img" className='w-[260px] h-[156px]' />
      <h2 className='font-bold py-2 '>CEO Unilever đặt nhiều kỳ vọng vào thị trường Việt Nam</h2>
    </div>])
  }
  return list;
}

const itemInfographics = (img) => {
  return <div className=''>
    <img src={img} alt='' className='w-[350px] h-[210px]' />
    <p className='py-2 text-base font-semibold'>Kỳ quan cầu Brooklyn được xây dựng như thế nào? </p>
  </div>
}


const renderListXemnhieu = () => {
  let list = []
  for (let i = 0; i < 8; i++) {
    list.push([
      <div className='flex gap-3 '>
        <h2 className='text-5xl font-semibold'>{i + 1}</h2>
        <p className='text-base'>Thông điệp từ những lần xuất hiện của con gái ông Kim Jong-un </p>
      </div>
    ])
  }
  return list;
}

// const renderInfo=()=>{
//   return <div className=''>
//      <img src="" alt="" className=''/>
//      <div className=''>
//        <h2 className='test-base font-semibold'>

//        </h2>
//        <p className='test-sm'></p>
//      </div>
//   </div>
// }

const CarouselRender=()=>{
  return <Carousel {...settings1}>
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
}

export default function SectionSpotlight() {
  const slider = useRef();

  return (
    <div className='container'>
      <div className='grid grid-cols-3 gap-6 py-4 border-b-2  '>
        <div className='col-span-2 border-r-2 pr-4'>
          <ListItemTiltle arrayTitle={["Spotlight"]} underline={1} />
          <div className='grid grid-cols-3 border-b-2 py-4 mb-2'>
            <div className='col-span-2 '>
              <img src={img40} alt='img' className='w-[460px] h-[276px]' />
            </div>
            <div className='col-span-1 '>
              <div className='bg-slate-100 h-full px-4 w-full'>
                <h2 className='text-lg font-semibold py-2'>Internet Việt Nam mong manh thế nào</h2>
                <p className='text-sm py-2'>Tuyến cáp quang biển sắp bị thanh lý đang là sợi dây nguyên vẹn duy nhất kết nối Việt Nam với mạng lưới Internet toàn cầu.</p>
                <p className='text-sm py-2'>Công nghệ <BiComment className='inline-block' /> 77</p>
              </div>
            </div>
          </div>
          <ListItemTiltle arrayTitle={["Infographics"]} underline={1} />
          <div className='grid grid-cols-2 gap-4 py-2 border-b-2'>
            <div className='col-span-1'>
              {itemInfographics(img45)}
            </div>
            <div className='col-span-1'>
              {itemInfographics(img46)}
            </div>
          </div>
          <div className='border p-2 mt-5 bg-slate-200 mb-2'>
            <CarouselItem />
          </div>

          <ListItemTiltle arrayTitle={["Xem nhiều"]} underline={1} />
          <div className='grid grid-cols-2 grid-rows-4 '>
            <div className='col-span-1 row-span-4 border-r-2 '>
              <div className='flex items-center gap-3 border-b-2 py-2'>
                <h2 className='text-5xl font-semibold'>1</h2>
                <p className='text-base'>Thông điệp từ những lần xuất hiện của con gái ông Kim Jong-un </p>
              </div>
              <div className='flex items-center gap-3 border-b-2 py-2 '>
                <h2 className='text-5xl font-semibold'>2</h2>
                <p className='text-base'>Người dân trong chung cư cũ nát: 'Bám trụ vì sợ dễ đi khó về'  </p>
              </div>
              <div className='flex items-center gap-3 border-b-2 py-2 '>
                <h2 className='text-5xl font-semibold'>3</h2>
                <p className='text-base'>Ronaldo lập 'poker' cho Al Nassr  </p>
              </div>
              <div className='flex gap-3 '>
                <h2 className='text-5xl font-semibold'>4</h2>
                <p className='text-base'>Cấm vận công nghệ - 'vũ khí' kinh tế mới của Mỹ  </p>
              </div>
            </div>
            <div className='col-span-1 row-span-4'>
              <div className='flex items-center gap-3 border-b-2 py-2 pl-3'>
                <h2 className='text-5xl font-semibold'>5</h2>
                <p className='text-base'>Gần 23.000 người thiệt mạng trong động đất Thổ Nhĩ Kỳ, Syria  </p>
              </div>
              <div className='flex items-center gap-3 border-b-2 py-2 pl-3'>
                <h2 className='text-5xl font-semibold'>6</h2>
                <p className='text-base'>Ông Zelensky thúc giục EU kết nạp Ukraine</p>
              </div>
              <div className='flex items-center gap-3 border-b-2 py-2 pl-3'>
                <h2 className='text-5xl font-semibold'>7</h2>
                <p className='text-base'>Lý do ông Zelensky bất ngờ thăm Anh  </p>
              </div>
              <div className='flex gap-3 pl-3'>
                <h2 className='text-5xl font-semibold '>8</h2>
                <p className='text-base'>Vì sao khách Trung Quốc chưa thể sang Việt Nam số lượng lớn?</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1  pb-4 '>
          <div className='border  px-4 pb-4'>
            <div className="grid grid-cols-2 py-4 ">
              <div className="underline underline-offset-4 inline-block font-semibold align-middle">Raovat</div>
              <div className='flex justify-end text-sm items-center '>
                <p className='pr-1'>Đăng tin ngay </p>
                <BsClock className='block' />
              </div>
            </div>

            <div className='relative border rounded-md px-4'>
              <button
                className="absolute z-10 top-[50%] -left-4 outline-none " onClick={() => slider.current?.prev()}
              ><FcPrevious className="text-xl" />
              </button>
              <div className='px-4'>
                <Carousel ref={slider} {...settings}>
                  {listItemCa()}
                </Carousel>
              </div>
              <button
                className="absolute z-10  top-[50%] -right-4 outline-none" onClick={() => slider.current?.next()}
              ><FcNext className="text-xl" />
              </button>

            </div>
          </div>

          <div className='px-4 py-4'>
            <img src={panner2} alt="panner" className='w-[300px] h-[600px]' />
          </div>

        </div>
      </div>
      <div className='grid grid-cols-2'>
        <div className=''>{CarouselRender()}</div>
        <div className=''>{CarouselRender()}</div>
      </div>
    </div >
  )
}


