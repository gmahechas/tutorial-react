import { Link, Outlet } from 'react-router-dom';

function Core() {
    return (
        <>
            <div>
                <h1>Recap App</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={`home`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`favorites`}>Favorites</Link>
                        </li>
                        <li>
                            <Link to={`contact`}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <section>
                    <Outlet />
                </section>
            </div>
        </>
    );
}

export default Core
