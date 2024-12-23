import Link from 'next/link'
import React from 'react'

function FooterMenu() {
    return (
        <div className='flex gap-20 flex-1 justify-end pr-24 '>
            <div>
                <h1 className='text-white font-bold text-base mb-6'>Features</h1>
                <ul className='flex flex-col gap-3'>
                    <li>
                        <Link href='/' className='font-medium text-base text-neutral-gray'>Link Shortening</Link>
                    </li>
                    <li>
                        <Link href='/' className='font-medium text-base text-neutral-gray'>Branded Links</Link>
                    </li>
                    <li>
                        <Link href='/' className='font-medium text-base text-neutral-gray'>Analytics</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className='text-white font-bold text-base mb-6'>Features</h1>
                <ul className='flex flex-col gap-3'>
                    <li>
                        <Link href='/' className='font-medium text-base text-neutral-gray'>Link Shortening</Link>
                    </li>
                    <li>
                        <Link href='/' className='font-medium text-base text-neutral-gray'>Branded Links</Link>
                    </li>
                    <li>
                        <Link href='/' className='font-medium text-base text-neutral-gray'>Analytics</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className='text-white font-bold text-base mb-6'>Features</h1>
                <ul className='flex flex-col gap-3'>
                    <li>
                        <Link href='/' className='font-medium text-base text-neutral-gray'>Link Shortening</Link>
                    </li>
                    <li>
                        <Link href='/' className='font-medium text-base text-neutral-gray'>Branded Links</Link>
                    </li>
                    <li>
                        <Link href='/' className='font-medium text-base text-neutral-gray'>Analytics</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterMenu
