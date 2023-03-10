import React from 'react'
import img4 from '../assets/img/img4.png';
import img5 from '../assets/img/img5.png';
import ItemNews from './ItemNews';
import ListItemTiltle from './ListItemTiltle';
import img31 from "../assets/img/31.png"
import img32 from "../assets/img/32.png"
import img30 from "../assets/img/img30.png"

// const arryContent={

// } 
const arrayTitle1 = ["Kinh Doanh", "Doanh Nghiệp", "Chứng khoáng", "Bất Động sản", "Bảo hiểm"];
const arrayTitle2 = ["Sức khỏe", "Tin tức", "Dinh dưỡng", "Khỏe đẹp", "Các bệnh", "Vaccine", "Di chứng Covid"];
const arrayTitle3= ["Giáo dục","Tin tức","Tuyển sinh","Chân dung","Du học","Giáo dục 4.0","Trắc nghiệm"]

const renderItem = (img) => {
    return <div className="grid grid-cols-3 border-b-2 py-4 ">
        <div className="col-span-2 flex justify-start gap-3">
            <img src={img} alt="" className="w-[225px] h-[135px]" />
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
}

export default function SectionInformation() {
    return (
        <div className="container ">
            <div className="grid grid-cols-8 mt-6 border-b-2 py-4 ">
                <div className="col-span-3 border-r-2 pr-4">
                    <div className='border-b-2'>
                        <ItemNews img={img4} title="24 chiến sĩ, nhân viên y tế Việt Nam sang Thổ Nhĩ Kỳ cứu nạn" content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay bay sang Thổ Nhĩ Kỳ hỗ trợ tìm kiếm nạn nhân mắc kẹt sau trận động đất." comment="70" />
                    </div>
                    <div className='border-b-2'>
                        <ItemNews title={"Vụ tham ô hơn 86 tỷ đồng ở ĐH Bách khoa Đà Nẵng bị lộ tẩy từ đâu?"} content={"ĐÀ NẴNGTừ chậm tiền lương cho cán bộ viên chức và chi trả học bổng sinh viên, Trường ĐH Bách khoa Đà Nẵng rà soát và phát hiện mất hơn 86 tỷ đồng "} comment={77} />
                    </div>
                    <div className='border-b-2 py-3'>
                        <img src={img31} alt="img" className='w-[380px] h-[60px]' />
                    </div>
                    <div className='border-b-2'>
                        <ItemNews img={img4} title="24 chiến sĩ, nhân viên y tế Việt Nam sang Thổ Nhĩ Kỳ cứu nạn" content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay bay sang Thổ Nhĩ Kỳ hỗ trợ tìm kiếm nạn nhân mắc kẹt sau trận động đất." comment="70" />
                    </div><div className='border-b-2'>
                        <ItemNews img={img4} title="24 chiến sĩ, nhân viên y tế Việt Nam sang Thổ Nhĩ Kỳ cứu nạn" content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay bay sang Thổ Nhĩ Kỳ hỗ trợ tìm kiếm nạn nhân mắc kẹt sau trận động đất." comment="70" />
                    </div>
                </div>
                <div className="col-span-5 pl-3 text-sm pb-3">
                    <ListItemTiltle arrayTitle={arrayTitle1} underline={1} />
                    <div className='py-4'>{renderItem(img5)}</div>
                    <div className=' mt-3 border-b-2 pb-3'>
                        <ul className='list-disc grid grid-cols-3 gap-5 text-base font-bold ml-3'>
                            <li className=''>
                                Tập đoàn Singapore làm dự án điện gió tỷ USD tại Việt Nam
                            </li>
                            <li className=''>
                                Tập đoàn Singapore làm dự án điện gió tỷ USD tại Việt Nam
                            </li><li className=''>
                                Tập đoàn Singapore làm dự án điện gió tỷ USD tại Việt Nam
                            </li>
                        </ul>
                    </div>
                    <div className='py-4'>
                        <ListItemTiltle arrayTitle={arrayTitle2} underline={1} />
                        <div className='py-4 first-letter:'>{renderItem(img32)}</div>
                        <div className=' mt-3 border-b-2 pb-3'>
                            <ul className='list-disc grid grid-cols-3 gap-5 text-base font-bold ml-3'>
                                <li className=''>
                                    U buồng trứng to như bụng bầu 8 tháng
                                </li>
                                <li className=''>
                                    Chè đậu trắng nhiễm khuẩn gây ngộ độc 88 người
                                </li><li className=''>
                                    Vì sao trẻ hay gặp khiếm khuyết bẩm sinh đường tiết niệu?
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='py-4'>
                        <ListItemTiltle arrayTitle={arrayTitle3} underline={1} />
                        <div className='py-4 first-letter:'>{renderItem(img30)}</div>
                        <div className=' mt-3 border-b-2 pb-3'>
                            <ul className='list-disc grid grid-cols-3 gap-5 text-base font-bold ml-3'>
                                <li className=''>
                                Cô giáo bị kiểm điểm sau 21 bài kiểm tra điểm 0 
                                </li>
                                <li className=''>
                                Đại dương nào mới được công nhận trong thế kỷ 21?
                                </li><li className=''>
                                Đại học Ngoại ngữ công bố phương thức tuyển sinh
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
