import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogoBlack } from '../assets/img';
import { logout } from '../api'; // Ensure you have a logout function in your API module
import { toast } from 'react-toastify';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    /**
     * Checks if the user is logged in by verifying the presence of token and user data in localStorage.
     * If either is missing, ensures the user is treated as logged out.
     */
    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        if (token && user) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [location.pathname]); // Re-run when the route changes

    /**
     * Toggles the navigation bar expansion for mobile view.
     */
    const toggleNavbar = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    /**
     * Determines if the given path is active based on the current location.
     * @param {string} path - The path to check.
     * @returns {boolean} - True if the path is active, else false.
     */
    const isActive = (path) => location.pathname === path;

    /**
     * Handles the user logout process.
     * Clears localStorage, notifies the user, and redirects to the login page.
     */
    const handleLogout = async () => {
        const token = localStorage.getItem('token');

        if (token) {
            try {
                const { success, message } = await logout(token); // API call to logout

                if (success) {
                    toast.success(message || 'Logout successful.');
                } else {
                    toast.error(message || 'Logout failed. Please try again.');
                }
            } catch (error) {
                console.error('Logout error:', error);
                toast.error('An error occurred during logout. Please try again.');
            } finally {
                // Clear user data regardless of logout success
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setIsLoggedIn(false);
                navigate('/login');
            }
        } else {
            toast.error('No active session found.');
            navigate('/login');
        }
    };

    return (
        <header className="header navbar-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="nav-inner">
                            <nav className="navbar navbar-expand-lg">
                                <Link className="navbar-brand" to="/">
                                    <img src={LogoBlack} alt="Logo" style={{ width: '80px' }} />
                                </Link>
                                <button
                                    className={`navbar-toggler mobile-menu-btn ${isNavExpanded ? 'active' : 'collapsed'}`}
                                    type="button"
                                    onClick={toggleNavbar}
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded={isNavExpanded ? "true" : "false"}
                                    aria-label="Toggle navigation"
                                >
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>
                                <div
                                    className={`collapse navbar-collapse sub-menu-bar ${isNavExpanded ? 'show' : 'collapse'}`}
                                    id="navbarSupportedContent"
                                    style={isNavExpanded ? { height: '253px' } : {}}
                                >
                                    <ul id="nav" className="navbar-nav ms-auto">
                                        <li className='nav-item'>
                                            <Link className={`${isActive('/') ? 'active' : 'collapsed'}`} to="/">Home</Link>
                                        </li>
                                        <li className='nav-item'>
                                            <Link className={`${isActive('/who-we-are') ? 'active' : 'collapsed'}`} to="/who-we-are">Who We Are</Link>
                                        </li>
                                        <li className='nav-item'>
                                            <Link className={`${isActive('/products') ? 'active' : 'collapsed'}`} to="/products">Products</Link>
                                        </li>
                                        <li className='nav-item'>
                                            <Link className={`${isActive('/how-it-works') ? 'active' : 'collapsed'}`} to="/how-it-works">How It Works</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="login-button">
                                    {isLoggedIn ? (
                                        <ul>
                                            <li className="button header-button">
                                                <Link to="/dashboard" className="btn" style={{ color: 'white' }}>Dashboard</Link>
                                            </li>
                                            <li>
                                                <button onClick={handleLogout} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                                    <i className="lni lni-enter"></i> Logout
                                                </button>
                                            </li>
                                        </ul>
                                    ) : (
                                        <ul>
                                            <li>
                                                <Link to="/login"><i className="lni lni-enter"></i> Login</Link>
                                            </li>
                                            <li>
                                                <Link to="/register"><i className="lni lni-user"></i> Register</Link>
                                            </li>
                                        </ul>
                                    )}
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
