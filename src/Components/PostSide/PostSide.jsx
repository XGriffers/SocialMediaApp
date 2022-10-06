
import React from 'react'
import Posts from '../PostSide/Posts'
import PostShare from '../PostSide/PostShare/PostShare'
import './PostSide.css'
const PostSide = () => {
    return (
        <div className="PostSide">
            <PostShare />
            <Posts />
        </div>
    )
}

export default PostSide