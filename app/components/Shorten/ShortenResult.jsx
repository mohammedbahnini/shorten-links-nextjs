import React from 'react'
import ShortenLink from './ShortenLink'

function ShortenResult() {
    return (
        <div className='flex flex-col gap-5 mt-6 '>
            <ShortenLink />
            <ShortenLink />
            <ShortenLink />
        </div>
    )
}

export default ShortenResult
