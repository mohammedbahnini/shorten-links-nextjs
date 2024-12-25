import { links } from '@/app/data/links'
import Link from 'next/link'
import React from 'react'

function NavLinks() {
    return (
        <ul className='flex-grow  items-center gap-7 ml-11 hidden md:flex'>
            {links.map((link, index) => {
                return (
                    <li key={index}>
                        <Link href={link.to} className='font-bold text-base text-neutral-grayish-violet hover:text-neutral-very-dark-violet'>{link.title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavLinks
