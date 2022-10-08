import React from 'react'
import './Post.css'
import { HiOutlineChatAlt } from 'react-icons/hi'
import { HiOutlineShare } from 'react-icons/hi'
import { HiOutlineHeart } from 'react-icons/hi'



const Post = ({ data }) => {
    return (
        <div className="Post">
            <img src={data.img} alt="" />


            <div className="postReact">
                <HiOutlineHeart cursor="pointer" />
                <HiOutlineChatAlt cursor="pointer" />
                <HiOutlineShare cursor="pointer" />
            </div>


            <span style={{ color: "var(--gray)", fontSize: '12px' }}>{data.likes} likes</span>

            <div className="detail">
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
        </div>
    )
}

export default Post