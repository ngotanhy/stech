import React from 'react'

export default function ListItemTiltle({arrayTitle,underline}) {
    return (
        <ul className="flex justify-start gap-4 mb-2 text-sm items-center">
            {arrayTitle?.map((item,index)=>{
                if(index===0){
                    let check = underline==1 ? "font-bold text-lg underline underline-offset-8  hover:text-blue-500 hover:cursor-pointer": "font-bold text-lg hover:text-blue-500 hover:cursor-pointer"
                    return <li className={check} key={index}>{item}</li>
                }else{
                    return <li className="hover:text-blue-500 hover:cursor-pointer" key={index}>{item}</li>
                }
            })}
        </ul>
    )
}
