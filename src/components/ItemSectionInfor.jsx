import React from 'react'
import { BiComment } from 'react-icons/bi';


export default function ItemSectionInfor({ img,content , comment,title}) {
    return (
        <div className="">
            <h2 className="font-bold">{title}</h2>
            {img ? <div className="flex justify-start gap-3 border-b-2">
                <img src={img} alt="img" className="w-[145px] h-[87px]" />
                <p className="text-sm pr-8 mb-3 ">{content}
                    <span><BiComment className='inline-block' />{comment}</span>
                </p>
            </div> :
                <p className="text-sm pr-8 mb-2 border-b-2 pb-3">{content}
                    <span><BiComment className='inline-block' />{comment}</span>
                </p>
            }
        </div>
    )
}
