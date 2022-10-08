import React from 'react'
import logo from '../../../img/logo.png'
import { HiSearch } from "react-icons/hi";
import './LogoSearch.css'


export const LogoSearch = () => {
    return (
        <div className="LogoSearch">
            <img src={logo} alt="" />
            <div className="Search">
                <input type="text" placeholder='Search' />
                <div className="s-icon">
                    <HiSearch />
                </div>
            </div>
        </div>
    )
}
