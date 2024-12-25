'use client'
import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import cx from 'classnames';

function ShortenLink({ link }) {
    const [isCopied, setIsCopied] = useState(false);

    return (
        <div className='flex flex-col md:-flex-row  bg-white md:py-5 md:px-8 px-4 pt-2 pb-4 rounded-xl overflow-hidden  '>
            <p className='flex-1 text-xl leading-9 text-primary-dark-violet relative'>{link.url}</p>
            <div className='block md:hidden h-[1px] bottom-0 bg-neutral-950 -left-4 w-[140%] '></div>
            <p className='text-primary-cyan font-medium text-xl leading-9 md:ml-6'>{link.shortenUrl}</p>
            <CopyToClipboard text={link.shortenUrl} onCopy={(() => setIsCopied(true))}>
                <button className={cx(' text-white py-2 rounded-md font-bold text-base md:ml-6 md:w-[100px] w-full ',
                    {
                        'bg-neutral-very-dark-violet': isCopied,
                        'bg-primary-cyan': !isCopied
                    })}>
                    {isCopied ? 'copied!' : 'copy'}
                </button>
            </CopyToClipboard>
        </div>
    )
}

export default ShortenLink
