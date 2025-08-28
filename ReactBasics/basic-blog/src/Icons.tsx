import {useState} from 'react'

interface DesktopIconProps {
  title: string;
  img_src: string;
};

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

function DesktopIcon({title, img_src}: DesktopIconProps) {
  return <img src={img_src} alt={title} />
}

export default DesktopIcon