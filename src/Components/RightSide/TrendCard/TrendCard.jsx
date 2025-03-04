import React from 'react'
import './TrendCard.css'
import { HiHashtag } from 'react-icons/hi';

import { TrendData } from '../../../Data/TrendData'
const TrendCard = () => {
    return (
        <div className="TrendCard StickyBox">
            <h3>Trends for you</h3>
            {TrendData.map((trend) => {
                return (
                    <div className="trend">
                        <span><HiHashtag />{trend.name}</span>
                        <span>{trend.shares}k shares</span>
                    </div>
                )
            })}

        </div>

    )
}

export default TrendCard