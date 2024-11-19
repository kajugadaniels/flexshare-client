import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * Login function to authenticate user using identifier and password.
 * @param {Object} payload - Contains identifier (email or phone) and password
 * @returns {Object} - success, data, message
 */
export const login = async (payload) => { // Accept a single payload object
    try {
        const response = await api.post('/auth/login/', payload); // Sends { identifier, password }
        return {
            success: true,
            data: response.data,
        };
    } catch (error) {
        let message = 'An error occurred during login. Please try again.';
        if (error.response) {
            // Extract error message from backend response
            message = error.response.data.error || error.response.data.detail || message;
        }
        return {
            success: false,
            message,
        };
    }
};

/**
 * Register a new user.
 * @param {Object} data - User registration data
 * @returns {Object} - User data and token or error message
 */

export const registerUser = async (data) => {
    try {
        const response = await api.post('/auth/register/', data, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        });
        return {
            success: true,
            data: response.data,
        };
    } catch (error) {
        let message = 'An error occurred while registering. Please try again.';
        if (error.response) {
            message = error.response.data.message || 'Registration failed.';
            if (error.response.data.errors) {
                message += ' ' + Object.values(error.response.data.errors).flat().join(' ');
            }
        }
        return {
            success: false,
            message,
        };
    }
};

/**
 * Initiate password reset by sending OTP to email or phone.
 * @param {string} emailOrPhone - User's email or phone number
 * @returns {Object} - Success message or error message
 */

export const passwordReset = async (emailOrPhone) => {
    try {
        const response = await api.post('/auth/password-reset/', { email_or_phone: emailOrPhone });
        return {
            success: true,
            message: response.data.message,
        };
    } catch (error) {
        let message = 'An error occurred during password reset request. Please try again.';
        if (error.response) {
            message = error.response.data.error || error.response.data.detail || message;
            if (error.response.data.non_field_errors) {
                message = error.response.data.non_field_errors.join(' ');
            }
        }
        return {
            success: false,
            message,
        };
    }
};

/**
 * Confirm password reset by verifying OTP and setting new password.
 * @param {string} emailOrPhone - User's email or phone number
 * @param {string} otp - One-Time Password received by user
 * @param {string} newPassword - New password to set
 * @returns {Object} - Success message or error message
 */

export const passwordResetConfirm = async (emailOrPhone, otp, newPassword) => {
    try {
        const response = await api.post('/auth/password-reset-confirm/', {
            email_or_phone: emailOrPhone,
            otp,
            password: newPassword,
        });
        return {
            success: true,
            message: response.data.message,
        };
    } catch (error) {
        let message = 'An error occurred during password reset confirmation. Please try again.';
        if (error.response) {
            if (error.response.data.non_field_errors) {
                message = error.response.data.non_field_errors.join(' ');
            } else if (error.response.data.detail) {
                message = error.response.data.detail;
            } else if (error.response.data.error) {
                message = error.response.data.error;
            }
        }
        return {
            success: false,
            message,
        };
    }
};

/**
 * Logout the user by deleting the authentication token.
 * @param {string} token - User's authentication token
 * @returns {Object} - Success message or error message
 */

export const logout = async (token) => {
    try {
        const response = await api.post(
            '/auth/logout/',
            {},
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        );
        return {
            success: true,
            message: response.data.message,
        };
    } catch (error) {
        let message = 'An error occurred during logout. Please try again.';
        if (error.response) {
            message = error.response.data.error || error.response.data.detail || message;
        }
        return {
            success: false,
            message,
        };
    }
};