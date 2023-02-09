import React from 'react'
import iconE from "../assets/img/iconE.png";
import logo from "../assets/img/logo.svg";
import { SlEnvolopeLetter } from "react-icons/sl";
import { TbLetterV } from "react-icons/tb";
import { TbLetterE } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

export default function Footer() {

    const col1 = ["Trang Chủ", "Videos", "Podcasts", "Ảnh", "Infographics", "Mới nhất", "Xem nhiều", "Tín nóng"];
    const col2 = ["Thời sự", "Góc nhìn", "Thới giới ", "Kinh doanh", "Giải trí"];
    const col3 = ["Thể Thao", "Pháp luật", "Giáo dục", "Sức khỏe", "Đời sống", "Du lịch"];
    const col4 = ["khoa học", "Số hóa", "Xe", "Ý kiến", "Tâm sự", "Hài"];
    const col5 = ["Rao vặt", "Start up", "Mua ảnh vnExpress", "eBox", "eWork"];

    return (
        <div className="container">
            <div className="border-t-2 border-b-2 py-5">
                <div className="grid grid-cols-4 ">
                    <div className="col-span-3 ">
                        <div className="grid grid-cols-5 gap-2">
                            <div className="font-bold text-sm">
                                {col1.map((item, index) => {
                                    return <div key={index} className='py-2 hover:underline hover:underline-offset-8 hover:cursor-pointer'>
                                        {item === "Infographics" ?
                                            <div className='border-b-2 pb-3'>{item}</div> :
                                            <div>{item}</div>}
                                    </div>
                                })}
                            </div>
                            <div className="text-sm">
                                {col2.map((item, index) => {
                                    return <div key={index} className='py-1 hover:underline hover:underline-offset-8 hover:cursor-pointer'>
                                        <div>{item}</div>
                                    </div>
                                })}
                            </div>
                            <div className="text-sm">
                                {col3.map((item, index) => {
                                    return <div key={index} className='py-1 hover:underline hover:underline-offset-8 hover:cursor-pointer'>
                                        <div>{item}</div>
                                    </div>
                                })}
                            </div>
                            <div className="text-sm border-r-2">
                                {col4.map((item, index) => {
                                    return <div key={index} className='py-1 hover:underline hover:underline-offset-8 hover:cursor-pointer '>
                                        <div>{item}</div>
                                    </div>
                                })}
                            </div>
                            <div className="text-sm  border-r-2 ">
                                {col5.map((item, index) => {
                                    return <div key={index} className='py-1 hover:underline hover:underline-offset-8 hover:cursor-pointer'>
                                        <div>{item}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 text-sm ml-3">
                        <div className="pb-2">Tải ứng dụng</div>
                        <div className="grid grid-cols-2 gap-1">
                            <button className="flex items-center bg-slate-200 px-2 py-1">
                                <img src={iconE} alt="express" className='w-5 ' />
                                <div className="pl-1">vnExpress</div>
                            </button>
                            <button className="flex items-center bg-slate-200 px-2 py-1">
                                <img src={iconE} alt="express" className='w-5 ' />
                                <div className="pl-1">International</div>
                            </button>
                        </div>
                        <div className="">Liên hệ</div>
                        <div className="grid grid-cols-2 gap-1 pb-1">
                            <button className="flex items-center">
                                <SlEnvolopeLetter />
                                <div className="pl-1">Tòa soạn</div>
                            </button>
                            <button className="flex items-center ">
                                <TbLetterE className='text-green-600' />
                                <div className="pl-1">Quảng cáo</div>
                            </button>
                        </div>
                        <div  className="border-b-2  pb-2" >
                        <button className="flex items-center">
                            <TbLetterV className='bg-yellow-300' />
                            <div className="pl-1 ">Hợp tác bản quyền</div>
                        </button></div>
                        <div className="text-base">
                            <div>Đường dây nóng</div>
                            <div className="grid grid-cols-2 gap-1">
                                <div >
                                    <div className="font-bold">083.888.0123</div>
                                    <div className="text-xs">(Hà Nội)</div>
                                </div>
                                <div >
                                    <div className="font-bold">082.233.3555</div>
                                    <div className="text-xs">(TP. Hồ Chí Minh)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-around gap-[30.5rem] border-b-2 ">
                <a href="#" className="flex items-center gap-3">
                    <div className="text-base">Báo điện tử</div>
                    <img src={logo} alt="logo" />
                </a>
                <div className="flex items-center gap-4 h-14">
                    <div className="border-r-2 pr-2">RSS</div>
                    <div className="">Theo  dõi VnExpress trên </div>
                    <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#3b5999] ">
                        <FaFacebookF className='text-slate-500 hover:text-white w-full ' />
                    </button>
                    <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-[#55acee]">
                        <BsTwitter className='text-white w-full' />
                    </button>
                    <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-[#c00]">
                        <AiFillYoutube className='text-white w-full' />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="text-sm">
                    <h2 className="font-bold">Báo tiếng Việt nhiều người xem nhất</h2>
                    <p>Thuộc Bộ Khoa học Công nghệ</p>
                    <p>Số giấy phép: 548/GP-BTTTT ngày 24/08/2021</p>
                </div>
                <div className="text-sm">
                    <p>Tổng biên tập: Phạm Hiếu</p>
                    <p>Địa chỉ: Tầng 10, Tòa A FPT Tower, số 10 Phạm Văn Bạch, Dịch Vọng, Cầu Giấy, Hà Nội</p>
                    <p>Điện thoại: 024 7300 8899 - máy lẻ 4500</p>
                </div>
                <div className="text-sm pl-[70px]">
                    <p>© 1997-2023. Toàn bộ bản quyền thuộc VnExpress</p>
                </div>
            </div>
        </div>
    )
}
