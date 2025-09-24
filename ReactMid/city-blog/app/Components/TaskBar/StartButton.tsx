"use client";
import { useState } from 'react';
import kde_icon from '../../../public/kde_logo_icon.png'
import Image from 'next/image';

interface StartButtonProps {
    onClickAction: () => void;
}

function StartButton({onClickAction}: StartButtonProps) {

    return <div className="desktop-app-launcher">
            <button onClick={onClickAction}>
                <Image src={kde_icon} alt="" />
            </button>
        </div>
};

export default StartButton