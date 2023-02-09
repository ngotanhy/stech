import React from 'react'
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import { BiComment } from "react-icons/bi";

export default function TopStory() {
  return (
    <div className="container ">
      <div className="flex justify-items-center gap-7 border-b-2">
        <div className="w-[770px]">
          <div className="flex justify-start">
            <div className=" w-[520px] h-[312px]">
              <img src={img1} alt="" className="w-full h-full" />
            </div>
            <div className="px-4 w-[250px] bg-slate-100 pr-6">
              <h2 className="font-bold text-xl pt-4">
                Mua sắm thuốc vướng 'do hướng dẫn chưa theo quy luật thị trường'
              </h2>
              <p className="text-sm py-3">
                Theo Phó thủ tướng Trần Hồng Hà, các vướng mắc về đấu thầu, mua sắm thuốc, trang thiết bị y tế là do thiếu hướng dẫn, chưa phù hợp quy luật thị trường.
              </p>
              <div className='text-sm'>
                <a href="#" className='hover:text-slate-400 pr-4'>2h trước</a>
                <a href="#" className='hover:text-slate-400' >Thời sự</a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-base mt-3 mb-7">
            <div className="col-span-1 pr-5">
              <h2 className="font-bold  ">Mua sắm thuốc vướng 'do hướng dẫn chưa theo quy luật thị trường'</h2>
              <p className="text-sm text-slate-500" >Theo Phó thủ tướng Trần Hồng Hà, các vướng mắc về đấu thầu, mua sắm thuốc, trang thiết bị y tế là do thiếu hướng dẫn, chưa phù hợp quy luật thị trường.</p>
            </div>
            <div className="col-span-1 pr-5">
              <h2 className="font-bold"> Văn Quyết giúp Hà Nội thắng CAHN</h2>
              <p className="text-sm text-slate-500">HÀ NỘICú đúp của tiền đạo Nguyễn Văn Quyết giúp chủ nhà Hà Nội thắng tân binh Công An Hà Nội 2-0, ở vòng hai V-League 2023 hôm 9/2.
              </p>
            </div>
            <div className="col-span-1 border-l-2 pl-3 ">
              <a href="#" className="block font-bold text-red-700">Góc nhìn</a>
              <a href="#" className="block font-semibold">Đạo đức cảu Al</a>
              <p className="text-sm text-slate-500">Con gái tôi 'cảm thấy xấu hổ' khi có bố là chuyên gia AI, đang phát triển một dự án AI Art.</p>
              <div className="flex justify-around gap-9 items-center ">
                <div className="">
                  <h2 className="pb-3 italic text-slate-400">Nguyễn Văn Như</h2>
                  <div className='flex items-center'>
                    <BiComment className="text-slate-900" />
                    <span className="text-blue-900 pl-1 text-xs">77</span>
                  </div>
                </div>
                <div className="w-[80px] h-[80px] rounded-full">
                  <img className="" src={img3} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[500px]">
          <img src={img2} alt="img2" className="w-full" />
        </div>

      </div>
    </div>
  )
}

