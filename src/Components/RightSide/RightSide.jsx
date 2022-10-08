import React, { useState } from "react";
import "./RightSide.css";
import { HiBell } from "react-icons/hi";
import { HiChatAlt } from "react-icons/hi";

import { HiCog } from "react-icons/hi";
import TrendCard from './TrendCard/TrendCard';
import ShareModal from './ShareModal/ShareModal';

const RightSide = () => {
    const [modalOpened, setModalOpened] = useState(false);
    return (
        <div className="RightSide">
            <div className="navIcons">

                <HiCog cursor="pointer" />
                <HiBell cursor="pointer" />
                <HiChatAlt cursor="pointer" />
            </div>

            <TrendCard />

            <button className="button r-button" onClick={() => setModalOpened(true)}>
                Share
            </button>

            <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />

        </div>

    );
};

export default RightSide;