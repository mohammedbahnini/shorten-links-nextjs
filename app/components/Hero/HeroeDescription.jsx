import { heroData } from '@/app/data/hero'
import Link from 'next/link'
import React from 'react'

function HeroeDescription() {
    return (
        <div className=' md:max-w-[563px] text-center '>
            <h1 className='text-neutral-very-dark-blue font-bold text-[42px] md:text-[80px] mb-4 md:mb-1 leading-[48px] md:leading-[90px] tracking-[-2px] '>{heroData.title}</h1>
            <h2 className='text-neutral-grayish-violet text-lg leading-8 md:leading-9  md:text-[22px] font-medium mb-8  md:mb-10  mr-6'>{heroData.description}</h2>
            <Link href='/' className='bg-primary-cyan hover:bg-primary-cyan-hover text-white px-10 py-4 rounded-full font-bold text-xl'>Get Started</Link>
        </div>
    )
}

export default HeroeDescription
