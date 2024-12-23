import { heroData } from '@/app/data/hero'
import Link from 'next/link'
import React from 'react'

function HeroeDescription() {
    return (
        <div className='max-w-[563px]'>
            <h1 className='text-neutral-very-dark-blue font-bold text-[80px] mb-1 leading-[90px] tracking-[-2px] '>{heroData.title}</h1>
            <h2 className='text-neutral-grayish-violet text-[22px] font-medium leading-9  mb-10 mr-6'>{heroData.description}</h2>
            <Link href='/' className='bg-primary-cyan hover:bg-primary-cyan-hover text-white px-10 py-4 rounded-full font-bold text-xl'>Get Started</Link>
        </div>
    )
}

export default HeroeDescription
