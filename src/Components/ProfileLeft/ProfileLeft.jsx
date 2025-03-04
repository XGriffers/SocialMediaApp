import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import { LogoSearch } from '../LeftSide/LogoSearch/LogoSearch'
import './ProfileLeft.css'
const ProfileLeft = () => {
    return (
        <div className="ProfileLeft">
            <LogoSearch />
            <InfoCard />
            <FollowersCard />
        </div>
    )
}

export default ProfileLeft