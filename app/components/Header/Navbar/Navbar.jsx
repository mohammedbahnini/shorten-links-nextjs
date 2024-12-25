import React from 'react';
import Image from 'next/image';
import { links } from '@/app/data/links';
import Link from 'next/link';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavActions from './NavActions';
import MenuMobile from '../MenuMobile/MenuMobile';

function Navbar() {
    return (
        <nav >
            <div className="flex items-center mt-10 md:mt-12 justify-between  md:justify-normal relative  py-0 m:py-2  ">
                <NavLogo />
                <NavLinks />
                <NavActions />
                <MenuMobile />
            </div>

        </nav>
    )
}

export default Navbar
