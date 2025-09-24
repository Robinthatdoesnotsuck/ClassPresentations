import { useEffect,useRef } from "react";
import "./Menu.css"

function Menu() {
    function useOutsideAlerter(ref) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            alert("You clicked outside of me!");
        }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    }
    return (
    <div className = "dropup" id = "dropup">
        <p>c</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
    </div>
    )
};

export default Menu