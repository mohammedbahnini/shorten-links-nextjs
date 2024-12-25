import React from 'react'
import StatsCard from './StatsCard'
import StatsCyanLine from './StatsCyanLine'
import StatsCardsGroup from './StatsCardsGroup'

function StatsCards() {
    return (
        <div className='mt-24 md:mt-[100px] relative '>
            <StatsCardsGroup />
            <StatsCyanLine />
        </div>
    )
}

export default StatsCards
