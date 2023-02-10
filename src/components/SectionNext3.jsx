

import React from 'react'
import { useRef } from 'react';
import { Button, Carousel } from "antd";
import img4 from '../assets/img/img4.png';
import ItemNews from './ItemNews'
import ListItemTiltle from './ListItemTiltle'
import { FcNext, FcPrevious } from "react-icons/fc";

const arrayTitle1 = ["Tâm sự", "Chuyên gia gỡ rối", "Hẹn hò"]
const arrayTitle2 = ["Ý kiến"]
const arrayTitle3 = ["Hài ", "Cười", "Đố vui", "Chuyện lạ", "Crossword"]



const settings = {
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,  
};

export default function SectionNext3() {
  const slider = useRef();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className='container'>
      <div className='py-4 '>
        <div className='grid grid-cols-3 gap-2 py-2 border-b-2 py-4 '>
          <div className='col-span-2 border-r-2 pr-4'>
            <ListItemTiltle arrayTitle={arrayTitle1} underline={1} />
            <div className='grid grid-cols-2 py-3 gap-3 border-b-2 pb-7'>
              <div className='bg-[#f7f7f7]'>
                <ItemNews title="Có ích kỷ khi không sinh thêm con theo mong muốn của chồng" sizeTitle={'text-2xl'} content="Tôi và chồng có con sáu tuổi, gia đình anh thích có thêm con cho đông, tôi không muốn sinh nữa với nhiều lý do.
                Tôi 34 tuổi, chuyện sinh đẻ không còn tự tin dù chưa hư thai hay phá thai lần nào. Tôi bị trầm cảm mùa đông nên bản thân cũng không trụ nổi huống gì phải chăm thêm một đứa trẻ. Hiện công việc của chồng khiến anh không thể chuyển đi chỗ ấm hơn. Lý do nữa là tôi còn ba mẹ già phải lo, nếu tôi có con" comment="12" underline={0} />
              </div>
              <div className=''>
                <div className='bg-[#f7f7f7]'>
                  <ItemNews title="24 chiến sĩ, nhân viên y tế Việt Nam sang Thổ Nhĩ Kỳ cứu nạn" content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay bay sang Thổ Nhĩ Kỳ hỗ trợ tìm kiếm nạn nhân mắc kẹt sau trận động đất." comment="70" underline={0} />
                </div>
                <div className='bg-[#f7f7f7] mt-5'>
                  <ItemNews title="24 chiến sĩ, nhân viên y tế Việt Nam sang Thổ Nhĩ Kỳ cứu nạn" content="Đoàn biệt phái gồm 24 chiến sĩ cứu hộ và nhân viên y tế 22h hôm nay bay sang Thổ Nhĩ Kỳ hỗ trợ tìm kiếm nạn nhân mắc kẹt sau trận động đất." comment="70" underline={0} />
                </div>
              </div>
            </div>
            <div className=''>
              <div className='grid grid-cols-2 py-3 gap-3 border-b-2 pb-7'>
                <div className=''>
                  <ListItemTiltle arrayTitle={arrayTitle2} underline={1} />
                  <ItemNews title="Chị đồng nghiệp ép tôi uống rượu để không 'mất mặt'" sizeTitle={'text-2xl'} content="TTôi chứng kiến hàng ngàn lý do để mọi người mời nhau uống rượu, bia và cũng chừng đó lý do nảy sinh bao tình huống khó xử. " comment="12" underline={1} />
                  <ItemNews title="Tôi có sai khi không thăm mẹ đồng nghiệp nằm viện?" sizeTitle={'text-2xl'} content="Quan điểm của tôi là chỉ đi mấy việc quan trọng như cưới, đám tang hoặc bản thân đồng nghiệp bị bệnh nặng, chứ không theo kiểu đại trà.  " comment="12" underline={1} />
                  <ItemNews title="Dùng quà tặng để kéo vào bẫy lừa thực hiện nhiệm vụ online" sizeTitle={'text-2xl'} content="Bằng cách nạp vào vài trăm ngàn đến cả triệu đồng, tôi được cam kết sẽ nhận về khoản tiền hoa hồng bằng một phần ba số tiền đã nạp. " comment="12" underline={1} />
                </div>
                <div className='border-l-2 pl-3'>
                  <div className=''>
                    <ListItemTiltle arrayTitle={arrayTitle3} underline={1} />
                    <ItemNews title="Lươn 'du lịch' khắp nhà vì chủ vụng về" content="Người đàn ông đổ cả rổ lươn sống vào nồi nước sôi khiến cả đàn lươn nhảy bật ra ngoài. " comment="70" underline={1} />
                  </div>
                  <div className=' mt-5'>
                    <ItemNews title="Quả cherry nào khác lạ nhất?" content="Bạn có thể tìm ra quả cherry đặc biệt đó ngay không?" comment="70" underline={1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-1  px-3 '>
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
    </div>
  )
}
