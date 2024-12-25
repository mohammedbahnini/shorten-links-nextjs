import React from 'react'
import Container from '../Utils/Container'
import HeroeDescription from './HeroeDescription'
import HeroImage from './HeroImage'

function Hero() {
    return (
        <section className='overflow-x-hidden'>
            <Container>
                <div className="flex relative pt-6  m:pt-36 pb-56  flex-col-reverse md:flex-row gap-8 md:gap-0   ">
                    <HeroeDescription />
                    <HeroImage />
                </div>
            </Container>
        </section>
    )
}

export default Hero
