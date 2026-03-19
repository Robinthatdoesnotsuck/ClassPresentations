import { useState } from "react"


export default function Warning({type = 'Warning', name, message, onClose}) {
    const [visible, setVisible] = useState(true)
    const [loading, setLoading] = useState(true)
    function setVisibility(){
        setVisible(false)
        if (onClose) {
            onClose();
        }
    }
    if (!visible) {
        return null;
    }
    return (
        <>
        <div>
            {name == 'Ivan' ? 'bad words ': 'Really cool '}

            <span aria-label="warning">{type}</span>
            <div>{message}</div>
            <button onClick={setVisibility}>Close the warning</button>
        </div>
        </>
    )
}