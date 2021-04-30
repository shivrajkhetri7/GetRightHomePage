import React from 'react';
import './style.css'
function NavBar(props) {
    return (
        <div>
            <header className="main-header">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg main-nav px-0 mt-0">
                        <a className="navbar-brand" href="/">
                            <img src="http://rajeshdas.com/assets/images/logo.svg" alt="rajeshdas.com" />
                            {/* Here We Need To Put Our Logo */}
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar icon-bar-1"></span>
                            <span className="icon-bar icon-bar-2"></span>
                            <span className="icon-bar icon-bar-3"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="mainMenu">
                            <ul className="navbar-nav ml-auto text-uppercase f1">
                                <li>
                                    <a href="/home" className="active active-first">home</a>
                                </li>
                                <li>
                                <a href="/properties-list">Properties List</a>
                                </li>
                                <li>
                                <a href="/about">about us</a>
                                </li>
                                <li>
                                    <a href="/project">projects</a>
                                </li>
                                <li>
                                    <a href="/registration">Register</a>
                                </li>
                                <li>
                                    <a href="/login">Login</a>
                                </li>
                                <li>
                                    <a href="/contact">contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default NavBar;