import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import { LogoSearch } from './LogoSearch/LogoSearch'
import ProfileCard from './ProfileCard/ProfileCard'

import './ProfileSide.css'

export const ProfileSide = () => {
    return (
        <div className="ProfileSide">
            <LogoSearch />
            <ProfileCard />
            <FollowersCard />
        </div>
    )
}
export default ProfileSide
