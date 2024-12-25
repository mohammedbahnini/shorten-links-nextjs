import React from 'react'
import Container from '../Utils/Container'
import FooterLogo from './FooterLogo'
import FooterMenu from './FooterMenu'
import FooterSocialMedia from './FooterSocialMedia'

function Footer() {
    return (
        <footer className='bg-neutral-very-dark-blue py-14 md:py-20 '>
            <Container>
                <div className='flex flex-col items-center md:flex-row gap-12 md:gap-0'>
                    <FooterLogo />
                    <FooterMenu />
                    <FooterSocialMedia />
                </div>
            </Container>
        </footer>
    )
}

export default Footer
