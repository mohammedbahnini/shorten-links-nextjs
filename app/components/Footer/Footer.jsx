import React from 'react'
import Container from '../Utils/Container'
import FooterLogo from './FooterLogo'
import FooterMenu from './FooterMenu'
import FooterSocialMedia from './FooterSocialMedia'

function Footer() {
    return (
        <footer className='bg-neutral-very-dark-blue py-20'>
            <Container>
                <div className='flex'>
                    <FooterLogo />
                    <FooterMenu />
                    <FooterSocialMedia />
                </div>
            </Container>
        </footer>
    )
}

export default Footer
