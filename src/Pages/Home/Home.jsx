import React from 'react'
import ProfileCard from '../../Components/LeftSide/ProfileCard/ProfileCard'
import ProfileSide from '../../Components/LeftSide/ProfileSide'
import PostSide from '../../Components/PostSide/PostSide'
import RightSide from '../../Components/RightSide/RightSide'

import './Home.css'

export const Home = () => {
    return (
        <div className="Home">
            {/* <ProfileCard /> */}
            <ProfileSide />
            <PostSide />
            <RightSide />
        </div>
    )
}
