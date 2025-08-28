import {useState} from 'react'
import './App.css'
import DesktopIcon from './Icons'

function Header({title}: {title : string}) {
  console.log()
  return <h1> {title}</h1>
}

function HomePage() {
  let full_icons: any = [];
  
  icons.forEach((icon, index) => {
    full_icons.push(
    <li id="single_icon"> <DesktopIcon title={icon.title} img_src={icon.img_src}></DesktopIcon> </li>
  );
  });

  return (<div id="icons">{full_icons}</div>)
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <HomePage></HomePage>
  )
}

export default App
