import React from 'react'
import Container from '../Utils/Container'
import Text from '../Input/Text'
import ShortenResult from './ShortenResult'

function Shorten() {
    return (
        <section className='bg-neutral-gray'>

            <div className=' -mt-0'>
                <Container>
                    <div className='rounded-xl bg-neutral-very-dark-blue py-14 px-16 flex gap-6 items-center  bg-[url("/images/bg/bg-shorten-desktop.svg")] bg-cover  '>
                        <Text />
                        <button className='bg-primary-cyan text-white font-bold text-xl cursor-pointer rounded-xl px-10 py-4 outline-none hover:bg-primary-cyan '>Shorten it!</button>
                    </div>
                </Container>

            </div>

            <Container>
                <ShortenResult />
            </Container>
        </section>
    )
}

export default Shorten
