import React, { useState, useRef } from "react";
import ProfileImage from "../../../img/profileImg.jpg";
import "./PostShare.css";
import { HiOutlinePhotograph } from "react-icons/hi";
import { HiPlay } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiCalendar } from "react-icons/hi";
import { HiX } from "react-icons/hi";


const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };
    return (
        <div className="PostShare">
            <img src={ProfileImage} alt="" />
            <div>
                <input type="text" placeholder="What's happening" />
                <div className="PostOptions">
                    <div className="option" style={{ color: "var(--photo)" }}
                        onClick={() => imageRef.current.click()}
                    >
                        <HiOutlinePhotograph />
                        Photo
                    </div>
                    <div className="option" style={{ color: "var(--video)" }}>
                        <HiPlay />
                        Video
                    </div>{" "}
                    <div className="option" style={{ color: "var(--location)" }}>
                        <HiOutlineLocationMarker />
                        Location
                    </div>{" "}
                    <div className="option" style={{ color: "var(--schedule)" }}>
                        <HiCalendar />
                        Schedule
                    </div>
                    <button className="button ps-button">Share</button>
                    <div style={{ display: "none" }}>
                        <input
                            type="file"
                            name="myImage"
                            ref={imageRef}
                            onChange={onImageChange}
                        />
                    </div>
                </div>
                {image && (

                    <div className="previewImage">
                        <HiX onClick={() => setImage(null)} />
                        <img src={image.image} alt="" />
                    </div>

                )}


            </div>
        </div>
    );
};

export default PostShare;