import './StartButton.css'
import { useState } from 'react'
import StartButton from './StartButton';
import Menu from './Menu';

function TaskBar() {cle
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
    <div className="pseudo-taskbar">
        <StartButton onClickAction={toggleMenu}></StartButton>
        {isMenuOpen && <Menu></Menu>}
    </div>
    )
}

export default TaskBar