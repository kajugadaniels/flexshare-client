import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api';
import { toast } from 'react-toastify';
import validator from 'validator';

const Login = () => {
    const [identifier, setIdentifier] = useState(''); // Changed from 'email' to 'identifier'
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            toast.info('You have been logged out.');
        }
    }, []);

    /**
     * Validates the login form inputs.
     * @returns {boolean} - Returns true if the form is valid, else false.
     */
    const validateForm = () => {
        if (!identifier.trim()) {
            toast.error('Please enter your email or phone number.');
            return false;
        }

        if (!password) {
            toast.error('Please enter your password.');
            return false;
        }

        if (identifier.includes('@')) {
            if (!validator.isEmail(identifier)) {
                toast.error('Please enter a valid email address.');
                return false;
            }
        } else {
            // Simple phone number validation (international format)
            const phoneRegex = /^\+?[1-9]\d{1,14}$/;
            if (!phoneRegex.test(identifier)) {
                toast.error('Please enter a valid phone number.');
                return false;
            }
        }

        return true;
    };

    /**
     * Handles the login form submission.
     * @param {Object} e - Event object
     */
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            // Prepare the payload with 'identifier' and 'password'
            const payload = {
                identifier: identifier.trim(),
                password: password
            };

            const response = await login(payload); // Pass the payload object

            const { success, data, message } = response;

            if (success) {
                toast.success('Login successful!');
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate('/dashboard');
            } else {
                toast.error(message);
            }
        } catch (error) {
            // This block is redundant since errors are handled in the login function
            toast.error('An error occurred during login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Login</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section className="login section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
                            <div className="form-head">
                                <h4 className="title">Login</h4>
                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <label htmlFor="identifier">Phone Number or Email Address</label>
                                        <input
                                            id="identifier"
                                            name="identifier"
                                            type="text"
                                            value={identifier}
                                            onChange={(e) => setIdentifier(e.target.value)}
                                            placeholder="Enter your email or phone number"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </div>
                                    <div className="check-and-pass">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-check">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input width-auto"
                                                        id="rememberMe"
                                                    />
                                                    <label className="form-check-label" htmlFor="rememberMe">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <Link to="/password-reset" className="lost-pass">
                                                    Lost your password?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button type="submit" className="btn" disabled={loading}>
                                            {loading ? 'Signing In...' : 'Sign In'}
                                        </button>
                                    </div>
                                    <div className="alt-option">
                                        <span>Or</span>
                                    </div>
                                    <div className="socila-login">
                                        <ul>
                                            <li>
                                                <a href="javascript:void(0)" className="google">
                                                    <i className="lni lni-google"></i>
                                                    Login With Google
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="outer-link">
                                        Don't have an account? <Link to="/register">Register here</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;
