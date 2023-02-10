import React from 'react'
import khcn from "../assets/img/khcn.svg";
import ListItemTiltle from './ListItemTiltle';
import img7 from "../assets/img/img7.png";
import img8 from "../assets/img/img8.png";
import img9 from "../assets/img/img9.png";
import img10 from "../assets/img/img10.png";
import img11 from "../assets/img/img11.png";




const arrayTitle1 = ["Khoa học", "Việt Nam", "Phát minh", "Ứng dụng", "Thế giới tự nhiên"];



const ComponentKHCN = () => {
    return <><div className='py-4'>
        <ListItemTiltle arrayTitle={arrayTitle1} underline={0} />
    </div>
        <div className='grid grid-cols-4 text-base'>
            <div className='col-span-2 border-r-2'>
                <img src={img7} alt='img' className='w-[500px] h-[300px]' />
                <h2 className='text-2xl font-semibold'>Dùng tia vũ trụ 'quét' tường thành 700 năm</h2>
                <p >Các nhà nghiên cứu Trung Quốc phát hiện những đoạn có mật độ bất thường trên tường thành nhà Minh do hoàng đế Chu Nguyên Chương xây dựng. </p>
            </div>
            <div className='col-span-1 pl-4 border-r-2 pr-4'>
                <div className='border-b-2 pb-2 '>
                    <img src={img10} alt='img' className='w-[240px] h-[143px]' />
                    <h2 className='text-base font-semibold'>Hóa thạch loài chim cánh cụt lớn nhất từng tồn tại</h2>
                </div>
                <div className=' py-2 '>
                    <img src={img10} alt='img' className='w-[240px] h-[143px]' />
                    <h2 className='text-base font-semibold'>Hóa thạch loài chim cánh cụt lớn nhất từng tồn tại</h2>
                </div>
            </div>
            <div className='col-span-1 pl-4'>
                <div className='flex justify-around gap-2 border-b-2 pb-3'>
                    <h2 className='text-base font-semibold'>Hóa thạch loài chim cánh cụt lớn nhất từng tồn tại</h2>
                    <img src={img7} alt='img' className='w-[100px] h-[60px]' />
                </div>
                <div className='flex justify-around gap-2 border-b-2 py-3'>
                    <h2 className='text-base font-semibold'>Hóa thạch loài chim cánh cụt lớn nhất từng tồn tại</h2>
                    <img src={img7} alt='img' className='w-[100px] h-[60px]' />
                </div><div className='flex justify-around gap-2 pt-3'>
                    <h2 className='text-base font-semibold'>Hóa thạch loài chim cánh cụt lớn nhất từng tồn tại</h2>
                    <img src={img7} alt='img' className='w-[100px] h-[60px]' />
                </div>
            </div>
        </div></>
}

export default function SectionKHCN() {
    return (
        <div className='container '>
            <div className='border-2 py-4 mt-4 px-3 bg-[#FCFAF6]'>
                <div className='flex justify-start items-center gap-20'>
                    <h1 className='text-2xl font-bold text-amber-500'>Khoa học - Công nghệ</h1>
                    <a href='#'> <img src={khcn} alt='khcn' /></a>
                </div>
                <div className='border-b-2 pb-4'>{ComponentKHCN()}</div>
                {ComponentKHCN()}
            </div>
        </div>
    )
}
