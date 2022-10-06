import React from 'react'
import PostSide from '../../Components/PostSide/PostSide'
import ProfileSide from '../../Components/ProfileLeft/ProfileLeft'
import RightSide from '../../Components/RightSide/RightSide'

import './Home.css'

export const Home = () => {
    return (
        <div className="Home">
            <ProfileSide />
            <PostSide />
            <RightSide />
        </div>
    )
}
