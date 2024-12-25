import React from 'react'
import Navbar from './Navbar/Navbar'
import Container from '../Utils/Container'
import MenuMobile from './MenuMobile/MenuMobile'

function Header() {
    return (
        <header>
            <Container>
                <Navbar />
            </Container>
        </header>
    )
}

export default Header
