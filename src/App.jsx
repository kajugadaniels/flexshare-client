import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './AppRoutes';
import './assets/css/main.css';

const GOOGLE_CLIENT_ID = '165505940635-oda6u8kfjnsgnit4gqfrvpekdd15aqo7.apps.googleusercontent.com';

const App = () => {
    return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <Router>
                <AppRoutes />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop
                    closeOnClick
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </Router>
        </GoogleOAuthProvider>
    );
};

export default App;
