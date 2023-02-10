import React from 'react'
import ListItemTiltle from './ListItemTiltle'
import img12 from "../assets/img/img12.png";
import img14 from "../assets/img/img14.png";
import img15 from "../assets/img/imh15.png";


const arrayTitle1 = ["Thời sự", "Chính trị", "Lao động - việc làm", "Dân sinh"]
const arrayTitle2 = ["Thế giới", "Tư liệu", "Phân tích"]
const arrayTitle3 = ["Pháp luật", "Hồ sơ phá án", "Tư vấn"]

const ItemContent = (arrayTitle ,img,comment ,title) => {
    return <div className=''>
        <ListItemTiltle arrayTitle={arrayTitle} underline={1} />
        <div className='border-b-2 py-4'>
            <div className='w-[340px] h-[204px]'>
                <img src={img} alt='img' className='w-full h-full' />    
            </div>
            <h2 className='text-base font-bold py-2'>{title}</h2>
            <p className='text-base '>{comment} </p>
        </div>
        <div className='py-4'>
               <h2 className='text-base font-bold'>Xe chở hơn 20 khách cháy rụi trên quốc lộ</h2>
               <p className=''>ĐỒNG NAIÔtô chở 21 khách chạy trên quốc lộ 51 từ TP Vũng Tàu tới TP HCM, bị cháy, nhiều người hốt hoảng, tháo chạy, sáng 10/2. </p>
        </div>
    </div>
}

export default function SectionContent() {
    return (
        <div className='container'>
            <div className='flex justify-around gap-4 py-5 border-b-2'>
                <div className='border-r-2 pr-5'>{ItemContent(arrayTitle1,img12,'Cháy kiốt trong cảng cá Quy Nhơn, một người chết','BÌNH ĐỊNH-Kiốt trong cảng cá Quy Nhơn bất ngờ bốc cháy khiến một người tử vong, nạn nhân khác bị hôn mê sâu, sáng 10/2.')}</div>
                <div className=' border-r-2 flex justify-center pr-5'>{ItemContent(arrayTitle2,img14,'Romania bác tin tên lửa Nga bay qua không phận','Romania bác tin từ tướng Ukraine rằng tên lửa Nga bay qua không phận nước này, trong khi Moldova xác nhận sự việc và triệu đại sứ để phản đối. ')}</div>
                <div className='flex justify-end '>{ItemContent(arrayTitle3,img15,'Chủ nhà lĩnh án tù vì đánh chết người trộm chó','HÀ NỘI-Ông Ngô Văn Cường bị phạt 7 năm tù do dùng gậy đánh tử vong người đã hạ độc hai con chó của gia đình. ')}</div>
            </div>
        </div>
    )
}
