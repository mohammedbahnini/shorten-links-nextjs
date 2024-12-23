'use client'
import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import cx from 'classnames';

function ShortenLink({ link }) {
    const [isCopied, setIsCopied] = useState(false);

    return (
        <div className='flex bg-white py-5 px-8 rounded-xl'>
            <p className='flex-1 text-xl leading-9 text-primary-dark-violet'>{link.url}</p>
            <p className='text-primary-cyan font-medium text-xl leading-9 ml-6'>{link.shortenUrl}</p>
            <CopyToClipboard text={link.shortenUrl} onCopy={(() => setIsCopied(true))}>
                <button className={cx(' text-white py-2 rounded-md font-bold text-base ml-6 w-[100px]',
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
