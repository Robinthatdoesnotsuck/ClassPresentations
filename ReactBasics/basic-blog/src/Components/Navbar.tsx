import { Link } from 'react-router'
import '../App.css'
function NavigationBar() {
    return (
            <>
                <div className="header-nav">
                    <Link to = "/">About me</Link>
                    <Link to = "/blog">Blogg</Link>
                    <Link to = "/games">Games</Link>
                    <h1>Super duper fun blogg</h1>
                </div>
            </>)
};

export default NavigationBar