import React from 'react'
import { BiComment } from 'react-icons/bi';


export default function ItemNews({ img,content , comment,title,sizeTitle ,underline}) {
    return (
        <div className="">
            <h2 className={sizeTitle? `${sizeTitle} font-bold`:"font-bold"}>{title}</h2>
            {img ? <div className={underline ==1 ?"flex justify-start gap-3 border-b-2":"flex justify-start gap-3"}>
                <img src={img} alt="img" className="w-[145px] h-[87px]" />
                <p className="text-sm pr-8 mb-3 ">{content}
                    <span><BiComment className='inline-block' />{comment}</span>
                </p>
            </div> :
                <p className={underline ==1 ?"text-sm pr-8 mb-2 border-b-2 pb-3":"text-sm pr-8 mb-2 pb-3"}>{content}
                    <span><BiComment className='inline-block' />{comment}</span>
                </p>
            }
        </div>
    )
}
