import { Input, Space } from 'antd';
import React from 'react'
import logo from "../assets/img/logo.svg";
import iconE from "../assets/img/iconE.png";
import { BsClock, BsPerson } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineBell } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import useScroll from '../Hooks/UseScroll';


export default function Header() {
    const { Search } = Input;
    const arrayListNav = ["Thời sự", "Góc nhìn", "Thế giới", "Videos", "Podcasts", "Kinh doanh", "Khoa học", "Giải trí", "Thể thao", "Pháp luật", "Giáo dục", "Sức khỏe", "Đời sống", "Du lịch", "Số hóa", "Xe", "Ý kiến", "Tâm sự", "Hài"];

    const scroll= useScroll();


    return (
        <div className='relative '>
            <div className='container '>
                <nav className="flex items-center h-12 text-sm ">
                    <img src={logo} className="pr-6 border-r-2" />
                    <div className="pl-4 pr-20"> Thứ năm, 9/2/2023 </div>
                    <div className="flex justify-center items-center px-2">
                        <BsClock />
                        <a href="#" className="pl-1"> Mới nhất </a>
                    </div>
                    <div className="flex justify-center items-center px-2">
                        <GoLocation />
                        <a href="#" className="pl-1"> Tin theo khu vược </a>
                    </div>
                    <div className="flex justify-center items-center px-2 border-r-2">
                        <img src={iconE} />
                        <a href="#" className="pl-1"> International </a>
                    </div>
                    <Space direction="vertical" className="pl-4">
                        <Search
                            placeholder="Tìm kiếm"
                            style={{
                                width: 200,
                            }}
                        />
                    </Space>
                    <div className="flex justify-center items-center px-2">
                        <BsPerson className='text-lg'/>
                        <a href="#" className="pl-2 hover:text-blue-400 font-medium">Đăng nhập</a>
                    </div>
                    <div className='text-lg'>
                        <AiOutlineBell />
                    </div>
                </nav>
            </div>
            <div className={scroll>25 ?'border-b-2 border-t-2 fixed w-full top-0 left-0 scroll-smooth bg-white z-20':'border-b-2 border-t-2'}>
                <div className="subContainer ">
                    <div className="flex items-center justify-around text-sm h-14">
                        <HiHome className='bg-slate-400 text-2xl rounded-lg p-1' />
                        {arrayListNav.map((item, index) => {
                            return <div className="font-bold" key={index}>
                                <a href="#">{item}</a>
                            </div>
                        })}
                        <button className="flex items-center justify-center text-slate-400  ">
                            <div className="pr-2 font-bold">Tất cả</div>
                            <FiMenu />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
