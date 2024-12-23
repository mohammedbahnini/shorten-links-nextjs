import React from 'react'
import Container from '../Utils/Container'

function Boost() {
    return (
        <section className='bg-[url(/images/bg/bg-boost-desktop.svg)] bg-cover bg-neutral-very-dark-violet mt-32'>
            <Container>
                <div className="flex flex-col items-center gap-8 py-14  ">
                    <h1 className='text-white font-bold text-[40px] leading-[48px] -tracking-[1px] text-center '>Boost your links today</h1>
                    <button className='bg-primary-cyan text-white font-bold text-xl py-3 px-10 rounded-full'>Get Started</button>
                </div>
            </Container>
        </section>
    )
}

export default Boost
