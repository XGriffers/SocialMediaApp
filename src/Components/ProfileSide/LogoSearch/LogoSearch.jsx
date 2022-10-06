import React from 'react'
import logo from '../../../img/logo.png'
import { UilSearch } from '@iconscout/react-unicons'


export const LogoSearch = () => {
    return (
        <div className="LogoSearch">
            <img src={logo} alt="" />
            <div className="Search">
                <input type="text" placeholder='Search' />
                <div className="s-icon">
                    <UilSearch />
                </div>
            </div>
        </div>
    )
}
