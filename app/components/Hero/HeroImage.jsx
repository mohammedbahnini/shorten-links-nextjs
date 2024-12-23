import Image from 'next/image'
import React from 'react'

function HeroImage() {
    return (
        <div className='absolute -right-[288px] top-20' >
            <div className='w-[733px]  ' >
                <Image src={'/images/illustrations/illustration-working.svg'} alt='Working Person' width={400} height={150} className='w-full object-cover' />
            </div>
        </div>
    )
}

export default HeroImage
