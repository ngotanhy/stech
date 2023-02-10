import React from 'react'
import ComponentContaier from './ComponentContaier'

const arrayTitle = ["Xe","Thị trường","Cầm lái","V-Car","V-Car","Diễn đàn","Video","Cẩm nang mua xe","Thi bằng lái","Mua bán"]

export default function SectionNext2() {

    return (
        <div className='container'>
            <div className='border-b-2 py-4'>
                <ComponentContaier arrTitle={arrayTitle} underline={1} />
            </div>
        </div>
    )

}
