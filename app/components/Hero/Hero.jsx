import React from 'react'
import Container from '../Utils/Container'
import HeroeDescription from './HeroeDescription'
import HeroImage from './HeroImage'

function Hero() {
    return (
        <section className='overflow-x-hidden md:overflow-visible'>
            <Container>
                <div className="flex relative pt-6  md:pt-36 md:pb-56 pb-40  flex-col-reverse md:flex-row gap-8 md:gap-0   ">
                    <HeroeDescription />
                    <HeroImage />
                </div>
            </Container>
        </section>
    )
}

export default Hero
