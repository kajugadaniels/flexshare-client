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