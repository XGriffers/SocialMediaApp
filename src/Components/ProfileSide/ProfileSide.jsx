import React from 'react'
import { LogoSearch } from './LogoSearch/LogoSearch'
import ProfileCard from './ProfileCard/ProfileCard'
import './ProfileSide.css'

export const ProfileSide = () => {
    return (
        <div className="ProfileSide">
            <LogoSearch />
            <ProfileCard />
        </div>
    )
}
