import { links } from '@/app/data/links'
import Link from 'next/link'
import React from 'react'
import MenuActions from './MenuActions'
import cx from 'classnames'

function Menu({ isOpened }) {
    return (
        <div className={cx('absolute right-0 translate-y-6 bg-primary-dark-violet rounded-xl w-full px-6 py-10  z-50 origin-top-right transition duration-100 ease-in  ', {
            'scale-100 opacity-100  ': isOpened,
            'scale-50 opacity-0    ': !isOpened
        })}>
            <ul className='flex flex-col gap-8 border-b-slate-100/50 border-b-2 pb-8  '>
                {links.map((link, index) => {
                    return (
                        <li key={index}>
                            <Link href={link.to} className='text-white font-bold text-center block text-lg'>{link.title}</Link>
                        </li>
                    )
                })}
            </ul>

            <MenuActions />
        </div>
    )
}

export default Menu
