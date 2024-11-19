import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from '../../api'; // Ensure the registerUser function is correctly imported

const Register = () => {
    const navigate = useNavigate();

    // State variables for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(''); // Added state for phone number
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [loading, setLoading] = useState(false);

    /**
     * Handles the form submission for user registration.
     * Validates input fields and communicates with the backend API.
     * @param {Object} e - The form submission event.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Client-side validations
        if (!name.trim()) {
            toast.error('Please enter your name.');
            return;
        }

        if (!email.trim()) {
            toast.error('Please enter your email.');
            return;
        }

        // Simple email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        if (!phoneNumber.trim()) { // Validate phone number presence
            toast.error('Please enter your phone number.');
            return;
        }

        // Simple phone number format validation (international format)
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        if (!phoneRegex.test(phoneNumber)) {
            toast.error('Please enter a valid phone number (e.g., +12345678901).');
            return;
        }

        if (!password) {
            toast.error('Please enter your password.');
            return;
        }

        if (password.length < 8) {
            toast.error('Password must be at least 8 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }

        if (!agreeToTerms) {
            toast.error('You must agree to the Terms and Conditions.');
            return;
        }

        setLoading(true);

        try {
            // Prepare the registration data
            const registrationData = {
                name: name.trim(),
                email: email.trim(),
                phone_number: phoneNumber.trim(), // Include phone_number in the data
                password: password,
                // Add other fields here if necessary
            };

            // Call the registerUser API function
            const response = await registerUser(registrationData);

            if (response.success) {
                toast.success(response.message || 'Registration successful!');
                // Store token and user data in localStorage
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                // Redirect to dashboard
                navigate('/dashboard');
            } else {
                // Handle backend validation errors
                toast.error(response.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            // Handle unexpected errors
            console.error('Registration error:', error);
            toast.error('An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    /**
     * Toggles the navigation bar expansion for mobile view.
     */
    const toggleNavbar = () => {
        // Implementation remains the same as in your original Header component
    };

    /**
     * Determines if the given path is active based on the current location.
     * @param {string} path - The path to check.
     * @returns {boolean} - True if the path is active, else false.
     */
    const isActive = (path) => {
        // Implementation remains the same as in your original Header component
    };

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">
                                    Sign Up
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li>
                                    <Link to="/"> {/* Changed to Link for client-side routing */}
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    Sign Up
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section className="login registration section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
                            <div className="form-head">
                                <h4 className="title">Sign Up</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-6 col-12'>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className="form-group">
                                                <label htmlFor="phoneNumber">Phone Number</label> {/* Added label for phone number */}
                                                <input
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    type="tel" // Changed to 'tel' for better mobile support
                                                    value={phoneNumber}
                                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                                    placeholder="Enter your phone number (e.g., +12345678901)"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-6 col-12'>
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
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <div className="form-group">
                                                <label htmlFor="confirmPassword">Confirm Password</label>
                                                <input
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    type="password"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    placeholder="Confirm your password"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="check-and-pass">
                                        <div className="row align-items-center">
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input width-auto"
                                                        id="agreeToTerms"
                                                        checked={agreeToTerms}
                                                        onChange={(e) => setAgreeToTerms(e.target.checked)}
                                                        required
                                                    />
                                                    <label className="form-check-label" htmlFor="agreeToTerms">
                                                        Agree to our <Link to="/terms-and-conditions">Terms and Conditions</Link> {/* Changed to Link */}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button type="submit" className="btn" disabled={loading}>
                                            {loading ? 'Signing Up...' : 'Sign Up'}
                                        </button>
                                    </div>
                                    <p className="outer-link">
                                        Already have an account? <Link to="/login">Login Now</Link> {/* Changed to Link */}
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Register;
