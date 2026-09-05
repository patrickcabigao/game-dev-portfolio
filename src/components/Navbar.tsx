export default function Navbar(): React.ReactNode {
    return (
        <nav>
            <a href="/" className="navbar-name">Patrick Cabigao</a>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/games">Games</a></li>
                <li><a href="/logs">Logs</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}