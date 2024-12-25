import Link from 'next/link'
import React from 'react'

function NavActions() {

    return (
        <ul className=' items-center gap-9 hidden md:flex'>
            <li>
                <Link href='/' className='text-neutral-grayish-violet font-bold hover:text-neutral-very-dark-violet'>Login</Link>
            </li>
            <li>
                <Link href='/' className='bg-primary-cyan px-6 rounded-full text-white font-bold py-2 hover:bg-primary-cyan/50'>Sign up</Link>
            </li>
        </ul>
    )
}

export default NavActions
