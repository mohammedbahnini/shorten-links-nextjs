import React from 'react'

function ShortenLink() {
    return (
        <div className='flex bg-white py-5 px-8 rounded-xl'>
            <p className='flex-1 text-xl leading-9 text-primary-dark-violet'>https://www.frontendmentor.io</p>
            <p className='text-primary-cyan font-medium text-xl leading-9 ml-6'>https://rel.ink/k4lKyk</p>
            <button className='bg-primary-cyan text-white px-8 py-2 rounded-md font-bold text-base ml-6'>Copy</button>
        </div>
    )
}

export default ShortenLink
