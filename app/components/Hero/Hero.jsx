import React from 'react'
import Container from '../Utils/Container'
import HeroeDescription from './HeroeDescription'
import HeroImage from './HeroImage'

function Hero() {
    return (
        <section className=''>
            <Container>
                <div className="flex relative pt-36 pb-56">
                    <HeroeDescription />
                    <HeroImage />
                </div>

            </Container>
        </section>
    )
}

export default Hero
