import React from 'react'
import Container from '../Utils/Container'
import StatsTitle from './StatsTitle'
import StatsCards from './StatsCards'

function Stats() {
    return (
        <section>
            <Container>
                <div className='mt-32'>
                    <StatsTitle />
                    <StatsCards />
                </div>
            </Container>
        </section>
    )
}

export default Stats
