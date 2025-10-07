import Link from 'next/link'
import '../App.css'

function NavigationBar() {
    return (
        <>
            <div className="header-nav">
                <Link href="/">About me</Link>
                <Link href="/blog">Blogg</Link>
                <Link href="/game-page">Games</Link>
                <Link href="/login-page">Login right now</Link>
                <Link href="/register-page">Register to the super duper blog</Link>
                <h1>Super duper fun blogg</h1>
            </div>
        </>)
};

export default NavigationBar