import Link from 'next/link'
import '../App.css'

function NavigationBar() {
    return (
            <>
                <div className="header-nav">
                    <Link href = "/">About me</Link>
                    <Link href = "/blog">Blogg</Link>
                    <Link href = "/games-page">Games</Link>
                    <h1>Super duper fun blogg</h1>
                </div>
            </>)
};

export default NavigationBar