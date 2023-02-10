import React from 'react'
import ListItemTiltle from './ListItemTiltle'
import img6 from "../assets/img/img6.png";
import { BsHeadphones } from 'react-icons/bs';
import { BiComment } from 'react-icons/bi';
const arrayTitle1 = ["Podcasts", "VnExpress hôm nay", "Tiền làm gì?", "Tài chính cá nhân", "Giải mã", "Thầm thì"];

const itemImg1 = () => {
    return <div className='flex justify-start'>
        <img src={img6} alt="img" className='w-[120px] h-[120px]'></img>
        <div className='ml-4'>
            <h2 className='text-base font-bold mb-2'>Điểm tin 11h: Khám xét hai trung tâm đăng kiểm Đà Nẵng; Hơn 21.000 người thiệt mạng trong động đất Thổ Nhĩ Kỳ, Syria</h2>
            <p className='text-ms'>Cựu phó tổng thống Mỹ Mike Pence bị triệu tập; Ukraine đăng video pháo binh tập kích thiết giáp 'Kẻ hủy diệt'... </p>
        </div>
    </div>
}

const itemMusic = () => {
    let list = []
    for (let i = 0; i < 3; i++) {
        if (i < 3) {
            list.push([<li className='border-r-2' key={i}>
                <div className='flex justify-start gap-3 text-base font-semibold items-center'>
                    <BsHeadphones />
                    <h2 className=''>Xung đột vì nuôi chó, mèo ở chung cư</h2>
                </div>
                <p className="text-sm pr-8 mb-3 ">Nhiều lần can chồng gây lộn vì chủ chó không xích và rọ mõm vật nuôi khi ra ngoài, ban quản lý cũng không thể xử lý, chị Lan chọn cách mang theo bình xịt hơi cay để tự vệ.
                    <span><BiComment className='inline-block mx-2' />77</span>
                </p>
            </li>])
        } else {
            list.push([<li className="border-0" key={i}>
                <div className='flex justify-start gap-3 text-base font-semibold items-center'>
                    <BsHeadphones />
                    <h2 className=''>Xung đột vì nuôi chó, mèo ở chung cư</h2>
                </div>
                <p className="text-sm pr-8 mb-3 ">Nhiều lần can chồng gây lộn vì chủ chó không xích và rọ mõm vật nuôi khi ra ngoài, ban quản lý cũng không thể xử lý, chị Lan chọn cách mang theo bình xịt hơi cay để tự vệ.
                    <span><BiComment className='inline-block mx-2' />77</span>
                </p>
            </li>])
        }

    }
    return list;
}

export default function SectionPodcast() {

    return (
        <div className='container'>
            <div className='mt-4'>
                <ListItemTiltle arrayTitle={arrayTitle1} underline={1} />
                <div className='grid grid-cols-2 gap-2 border-b-2 pb-4'>
                    <div className='border-r-2 pr-2'> {itemImg1()} </div>
                    <div className='ml-2'> {itemImg1()} </div>
                </div>
                <ul className='grid grid-cols-3 gap-3 py-4 border-b-2'>
                    {itemMusic()}
                </ul>
            </div>
        </div>
    )
}
