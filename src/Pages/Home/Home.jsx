import React from 'react'
import { ProfileSide } from '../../Components/ProfileSide/ProfileSide'
import './Home.css'

export const Home = () => {
    return (
        <div className="Home">
            <ProfileSide />
            <div className="posts">Posts</div>
            <div className="rightSide">Right Side</div>
        </div>
    )
}
