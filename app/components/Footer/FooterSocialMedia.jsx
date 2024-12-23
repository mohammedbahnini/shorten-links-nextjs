import Link from 'next/link'
import React from 'react'

function FooterSocialMedia() {
    return (
        <div>
            <ul className='flex gap-6'>
                <li>
                    <Link href='/'><img src='/images/icons/icon-facebook.svg' /> </Link>
                </li>
                <li>
                    <Link href='/'><img src='/images/icons/icon-twitter.svg' /> </Link>
                </li>
                <li>
                    <Link href='/'><img src='/images/icons/icon-pinterest.svg' /> </Link>
                </li>
                <li>
                    <Link href='/'><img src='/images/icons/icon-instagram.svg' /> </Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterSocialMedia
