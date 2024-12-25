'use client';
import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import Menu from './Menu'
function MenuMobile() {
    const [isOpened, setIsOpened] = useState(false);


    return (
        <div className=''>
            <button className='bg-transparent cursor-pointer outline-none border-none  flex items-center md:hidden md:invisible ' onClick={() => setIsOpened(prev => !prev)}  >
                <MdMenu className='text-2xl' />
            </button>
            <Menu isOpened={isOpened} />

        </div>
    )
}

export default MenuMobile
