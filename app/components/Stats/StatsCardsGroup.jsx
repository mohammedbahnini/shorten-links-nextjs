import React from 'react'
import StatsCard from './StatsCard'

function StatsCardsGroup() {
    return (
        <div className=' flex flex-col md:flex-row gap-24 md:gap-8 items-start relative z-[1]'>
            <StatsCard />
            <StatsCard />
            <StatsCard />
        </div>
    )
}

export default StatsCardsGroup
