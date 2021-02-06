import React from 'react';
import Logo from '../theIQkids.png';
import '../css/header.css';

export const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light container">
                <a className="navbar-brand" href="#"><img className="brandImg" src={Logo}></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav the-center-aligned-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Quiz <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">School</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Worksheet</a>
                        </li>
                        
                    </ul>
                    <ul className="navbar-nav the-right-nav-align">
                        <li className="nav-item contactLinkNav">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item loginNavlink">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </header>
    )
}
