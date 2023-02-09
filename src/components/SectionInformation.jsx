import React from 'react'
import { BiComment } from 'react-icons/bi';
import img4 from '../assets/img/img4.png';
import img5 from '../assets/img/img5.png';


export default function SectionInformation() {
    return (
        <div className="container ">
            <div className="grid grid-cols-8 mt-6">
                <div className="col-span-3 border-r-2">
                    <div className="">
                        <h2 className="font-bold">24 chiến sĩ, nhân viên y tế Việt Nam sang Thổ Nhĩ Kỳ cứu nạn</h2>
                        <div className="flex justify-start gap-3">
                            <img src={img4} alt="img" className="w-[145px] h-[87px]" />
                            <p className="text-sm pr-8">Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay bay sang Thổ Nhĩ Kỳ hỗ trợ tìm kiếm nạn nhân mắc kẹt sau trận động đất.
                                <span><BiComment className='inline-block'/>77</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 pl-3 text-sm ">
                    <ul className="flex justify-start gap-4 ">
                        <li className="font-bold text-lg underline underline-offset-8 hover:text-blue-500 hover:cursor-pointer">Kinh Doanh</li>
                        <li className="hover:text-blue-500 hover:cursor-pointer">Doanh Nghiệp</li>
                        <li className="hover:text-blue-500 hover:cursor-pointer">Chứng khoáng</li>
                        <li className="hover:text-blue-500 hover:cursor-pointer">Bất Động sản</li>
                        <li className="hover:text-blue-500 hover:cursor-pointer">Bảo hiểm</li>
                    </ul>
                    <div className="grid grid-cols-3">
                        <div className="col-span-2 flex justify-start gap-3">
                            <img src={img5} alt="" className="w-[225px] h-[135px]" />
                            <div className="pr-2">
                                <h2 className="font-semibold text-base">Tiền vào chứng khoán thấp nhất một tháng</h2>
                                <p className="text-sm">VN-Index chốt phiên 9/2 trong sắc đỏ khi áp lực bán chiếm ưu thế, còn thanh khoản thị trường cũng liên tục giảm, xuống thấp nhất từ đầu tháng 1. </p>
                            </div>
                        </div>
                        <div className="col-span-1 border-l-2 pl-3 ">
                            <h2 className="font-semibold text-base">Tiền vào chứng khoán thấp nhất một tháng</h2>
                            <p className="text-sm">VN-Index chốt phiên 9/2 trong sắc đỏ khi áp lực bán chiếm ưu thế, còn thanh khoản thị trường cũng liên tục giảm, xuống thấp nhất từ ... </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
