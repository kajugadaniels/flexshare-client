import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LogoBlack } from '../assets/img';

const Header = () => {
    const location = useLocation();
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const isActive = (path) => location.pathname === path;

    const toggleNavbar = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    return (
        <header className="header navbar-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="nav-inner">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="/">
                                    <img src={LogoBlack} alt="Logo" style={{ width: '80px' }} />
                                </a>
                                <button className={`navbar-toggler mobile-menu-btn ${isNavExpanded ? 'active' : 'collapsed'}`}
                                    type="button"
                                    onClick={toggleNavbar}
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded={isNavExpanded ? "true" : "false"}>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>
                                <div className={`collapse navbar-collapse sub-menu-bar ${isNavExpanded ? 'show' : 'collapse'}`}
                                    id="navbarSupportedContent"
                                    style={isNavExpanded ? { height: '253px' } : {}}>
                                    <ul id="nav" className="navbar-nav ms-auto">
                                        <li className='nav-item'>
                                            <a className={`${isActive('/') ? 'active' : 'collapsed'}`} href="/">Home</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className={`${isActive('/who-we-are') ? 'active' : 'collapsed'}`} href="/who-we-are">Who We Are</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className={`${isActive('/products') ? 'active' : 'collapsed'}`} href="/products">Products</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className={`${isActive('/how-it-works') ? 'active' : 'collapsed'}`} href="/how-it-works">How It Works</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="login-button">
                                    <ul>
                                        <li>
                                            <a href="/login"><i className="lni lni-enter"></i> Login</a>
                                        </li>
                                        <li>
                                            <a href="/register"><i className="lni lni-user"></i> Register</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="button header-button">
                                    <a href="/contact-us" className="btn">Contact Us</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
