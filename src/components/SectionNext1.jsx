import React from 'react'
import ComponentContaier from './ComponentContaier'

const arrayTitle = ["Du lịch", "Điểm đến", "Ẩm thực", "Dấu chân", "Tư vấn", "Cẩm nang", "Ảnh"]
export default function SectionNext1() {
    return (
        <div className='container'>
            <div className='border-b-2 py-4'>
                <ComponentContaier arrTitle={arrayTitle } underline={1} />
            </div>
        </div>
    )
}
