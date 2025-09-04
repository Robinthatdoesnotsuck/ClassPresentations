import React from "react";
import DesktopIcon from "../Components/Icons";
import NavigationBar from "../Components/Navbar"
import TaskBar from "../Components/TaskBar";


let icons = [
  {
    title: "haro",
    img_src: "https://i.pinimg.com/736x/08/68/f9/0868f96271fd81b7d86674085391db25.jpg",
  },
  {
    title: "boci",
    img_src: "https://i.pinimg.com/1200x/05/2e/bd/052ebd7e9dcb06080b7cda54c06c1a9c.jpg",
  },
  {
    title: "y",
    img_src: "y",
  }
];

function HomePage() {
    let full_icons: any = [];
    const [number, setNumber] = React.useState(0);
    const [colorMode, setColorMode] = React.useState(false)

    async function handleClick() {
        console.log('Increment button');
        setNumber(number + 3);
        const response = await fetch('http://localhost:8080', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });
    }

    icons.forEach((icon: { title: string; img_src: string }, _index: any) => {
        full_icons.push(
        <DesktopIcon title={icon.title} img_src={icon.img_src}></DesktopIcon> 
    );
    });
    return ( 
        <>
            <NavigationBar />
            <div className="row">
                <div className="column-main">
                    <button onClick={handleClick}>number: {number}</button>
                    <div id="icons">{full_icons}</div>
                </div>
            </div>
            <TaskBar></TaskBar>
        </>
    )
};

export default HomePage