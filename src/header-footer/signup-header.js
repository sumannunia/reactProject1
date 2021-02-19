import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import {useState} from 'react';
import Logo from '../theIQkids.png';
import '../css/header.css';

const TheAfterSignInHeader = (prop) =>{
    let loginState = localStorage.getItem('loginStatus');
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean(loginState));
    console.log(Boolean(loginState));
    const logOut = () => {
        localStorage.setItem('loginStatus', '')
        setIsLoggedIn('');
        prop.childData('');
    };
    console.log(prop)
    let afterLogin = <li className="nav-item dropdown afterLogin">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.2222 0.00193586C6.04377 -0.120706 0.124579 5.59931 0.00193714 12.7778C-0.0677235 16.848 1.7464 20.5062 4.63486 22.9389C4.82373 22.7741 5.02633 22.623 5.2515 22.5004L9.13042 20.3845C9.63914 20.1069 9.95605 19.5736 9.95605 18.9938V17.4043C9.95605 17.4043 8.81744 16.0425 8.38329 14.1504C8.02321 13.9174 7.78185 13.5146 7.78185 13.0559V11.3164C7.78185 10.9337 7.95208 10.5918 8.21649 10.3524V7.83777C8.21649 7.83777 7.69993 3.92452 12.9995 3.92452C18.2991 3.92452 17.7826 7.83777 17.7826 7.83777V10.3524C18.0475 10.5918 18.2172 10.9337 18.2172 11.3164V13.0559C18.2172 13.6407 17.8248 14.1327 17.292 14.2971C16.9952 15.2198 16.5669 16.0994 16.0008 16.8991C15.8581 17.1007 15.7246 17.2714 15.6079 17.4043V19.034C15.6079 19.634 15.9469 20.1829 16.4835 20.4508L20.6372 22.5273C20.8864 22.6519 21.1116 22.8094 21.3191 22.9845C24.1202 20.6485 25.9299 17.1556 25.9971 13.2222C26.1207 6.04377 20.4012 0.124578 13.2222 0.00193586Z" fill="#403A5D"/>
                                                    <path d="M9.13097 20.3838L5.25205 22.4997C5.02442 22.6238 4.81986 22.7763 4.62952 22.9426C6.89103 24.8495 9.8104 25.9999 13.0001 25.9999C16.1662 25.9999 19.0669 24.8667 21.3221 22.9858C21.1141 22.8102 20.8884 22.6522 20.6382 22.5276L16.4846 20.451C15.9479 20.1827 15.6089 19.6343 15.6089 19.0343V17.4046C15.7257 17.2717 15.8591 17.101 16.0019 16.8993C16.568 16.0997 16.9962 15.2201 17.293 14.2974C17.8258 14.133 18.2182 13.641 18.2182 13.0562V11.3167C18.2182 10.934 18.048 10.5921 17.7836 10.3527V7.83806C17.7836 7.83806 18.3002 3.9248 13.0006 3.9248C7.70096 3.9248 8.21753 7.83806 8.21753 7.83806V10.3527C7.95262 10.5921 7.78289 10.934 7.78289 11.3167V13.0562C7.78289 13.5144 8.02375 13.9177 8.38432 14.1507C8.81897 16.0428 9.95708 17.4046 9.95708 17.4046V18.9941C9.95659 19.5729 9.63969 20.1062 9.13097 20.3838Z" fill="#E7ECED"/>
                                                </svg>

                                            Rokcey
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <div className="dropdown-item" >Profile</div>
                                                <div className="dropdown-item" onClick={logOut}>Logout</div>
                                            </div>
                                        </li>;
    let beforeLogin = <><li className="nav-item contactLinkNav">
                                                        <a className="nav-link" href="#">Contact Us</a>
                                                    </li>
                                                    <li className="nav-item loginNavlink">
                                                        <a className="nav-link" href="#">Login</a>
                                                    </li>
                                                    </>
    return <>
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light container">
                <Link to="/" className="navbar-brand" ><img className="brandImg" src={Logo}></img></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav the-center-aligned-nav">
                        <li className="nav-item active">
                            <Link to='/quiz-options' className="nav-link" href="#">Quiz <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/schools" className="nav-link" href="#">School</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="worksheet" className="nav-link" href="#">Worksheet</Link>
                        </li>
                        
                        {isLoggedIn ?  (<li className="nav-item">
                            <Link to="/analysis" className="nav-link" href="#">Analysis</Link>
                        </li>) : ''}
                        
                    </ul>
                    <ul className="navbar-nav the-right-nav-align">
                        {isLoggedIn ?  afterLogin : beforeLogin}
                        {/* <li className="nav-item contactLinkNav afterLogin">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li> */}
                        
                        
                    </ul>
                </div>
            </nav>
        </header>
    </>
};

export default TheAfterSignInHeader;