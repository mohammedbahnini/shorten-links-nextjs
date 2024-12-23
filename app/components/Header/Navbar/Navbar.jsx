import React from 'react';
import Image from 'next/image';
import { links } from '@/app/data/links';
import Link from 'next/link';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavActions from './NavActions';

function Navbar() {
    return (
        <nav >
            <div className="flex items-center mt-12 py-2 ">
                <NavLogo />
                <NavLinks />
                <NavActions />
            </div>

        </nav>
    )
}

export default Navbar
