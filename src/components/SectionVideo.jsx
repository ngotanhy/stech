import React from 'react'
import { BiComment } from 'react-icons/bi'
import ListItemTiltle from './ListItemTiltle'

const ItemTiltle = ["Thời sự", "Nhịp sống", "FoodCuộc ", "sống 4.0", "Tôi kể", "Chuyện núi rừng", "Nguy-Cơ"]

const renderListVideo=()=>{
    let list=[];
   for(let i=0; i<10;i++){
     list.push([ <div className='grid grid-cols-2 gap-3 border-b-2 pb-2'>
     <button className="">
         <video width="100%" controls className='relative -z-10'>
             <source src="mov_bbb.mp4" type="video/mp4" />
             <source src="mov_bbb.ogg" type="video/ogg" />
             Your browser does not support HTML video.
         </video>
     </button>
     <h2 className='text-base font-semibold pb-4'>
         Văn Hậu va chạm với Văn Quyết
         <span className=' text-xs font-normal flex gap-2 items-center pt-3'>
             <a href='#'> The thao </a><BiComment className='inline-block' /><span className='text-blue-600'>77</span></span>
     </h2>
 </div>])
   }
   return list
}

export default function SectionVideo() {
    return (
        <div className='container'>
            <div className='border-b-2 py-4'>
                <div className='py-4'><ListItemTiltle arrayTitle={ItemTiltle} underline={1} /></div>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='col-span-2'>
                        <video width="100%" controls className='relative -z-10'>
                            <source src="mov_bbb.mp4" type="video/mp4" />
                            <source src="mov_bbb.ogg" type="video/ogg" />
                            Your browser does not support HTML video.
                        </video>
                        <h2 className='text-2xl font-semibold flex items-end py-4'>
                            Văn Hậu va chạm với Văn Quyết
                            <span className='pl-2 text-xs text-blue-600 flex gap-2 items-end'><BiComment className='inline-block' />77</span>
                        </h2>
                    </div>
                    <div className='col-span-1 overflow-y-auto h-[400px] '>
                        <div className='grid grid-cols-2 gap-3 border-b-2 pb-2'>
                            <button className="">
                                <video width="100%" controls className='relative -z-10'>
                                    <source src="mov_bbb.mp4" type="video/mp4" />
                                    <source src="mov_bbb.ogg" type="video/ogg" />
                                    Your browser does not support HTML video.
                                </video>
                            </button>
                            <h2 className='text-base font-semibold pb-4'>
                                Văn Hậu va chạm với Văn Quyết
                                <span className=' text-xs font-normal flex gap-2 items-center pt-3'>
                                    <a href='#'> The thao </a><BiComment className='inline-block' /><span className='text-blue-600'>77</span></span>
                            </h2>
                        </div>
                        {renderListVideo()}
                    </div>
                </div>
            </div>
        </div>
    )
}
