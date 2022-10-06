import React from 'react'
import Cover from '../../../img/cover.jpg'
import Profile from '../../../img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>
            <div className="ProfileName">
                <span>
                    Name Goes Here
                </span>
                <span>
                    Location Goes Here
                </span>
            </div>
            <div className="FollowStatus">
                <hr />
                <div>
                    <div className="Followers">
                        <span>666</span>
                        <span>following</span>
                    </div>
                    <div className='vl'></div>
                    <div className="Followers">
                        <span>2</span>
                        <span>following</span>
                    </div>
                </div>
                <hr />
            </div>
            <span>
                My Profile
            </span>
        </div>
    )
}

export default ProfileCard