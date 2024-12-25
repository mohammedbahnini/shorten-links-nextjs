import React from 'react'

function StatsCard() {
    return (
        <div className='pt-20 px-8 pb-10 bg-white rounded-md relative md:[&:nth-child(2)]:mt-11 md:[&:nth-child(3)]:mt-[88px]'>
            <div className='w-[88px] aspect-square rounded-full bg-neutral-very-dark-violet flex items-center justify-center absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 '>
                <img src='/images/icons/icon-brand-recognition.svg' />
            </div>
            <div className='text-center md:text-left'>
                <h1 className='font-bold text-xl mb-3  '>Brand Recognition</h1>
                <h2 className='font-medium text-neutral-grayish-violet text-base leading-7'>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</h2>
            </div>
        </div>
    )
}

export default StatsCard
