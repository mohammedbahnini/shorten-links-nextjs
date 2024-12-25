import React from 'react'
import ShortenLink from './ShortenLink'

function ShortenResult({ links }) {

    return (
        <div className='flex flex-col gap-6 md:gap-5 mt-6 '>
            {
                links.map((link, index) => (<ShortenLink link={link} key={index} />))
            }

        </div>
    )
}

export default ShortenResult
