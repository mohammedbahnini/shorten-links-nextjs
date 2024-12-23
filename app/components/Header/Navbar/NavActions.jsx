import Link from 'next/link'
import React from 'react'

function NavActions() {
    const actions = [
        {
            text: 'Login',
            isForLogin: false
        },
        {
            text: 'Sign up',
            isForLogin: true
        }
    ]
    return (
        <ul className='flex items-center gap-9'>
            {/* {actions.map((action, index) => {
                return (
                    <li key={index}>
                        <Link href='/'>{action.text}</Link>
                    </li>
                )
            })} */}
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
