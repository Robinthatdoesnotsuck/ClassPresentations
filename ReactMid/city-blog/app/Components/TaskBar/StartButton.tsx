import { useState } from 'react';
import kde_icon from '../../assets/kde_logo_icon.png'

interface StartButtonProps {
    onClickAction: () => void;
}

function StartButton({onClickAction}: StartButtonProps) {

    return <div className="desktop-app-launcher">
            <button onClick={onClickAction}>
                <img src={kde_icon} alt="" />
            </button>
        </div>
};

export default StartButton