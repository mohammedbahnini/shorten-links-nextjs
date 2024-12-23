import Image from 'next/image'
import React from 'react'

function NavLogo() {
    return (
        <a>
            <Image src='/images/logo/logo.svg' alt='Shortly' width={120} height={33} />
        </a>
    )
}

export default NavLogo
