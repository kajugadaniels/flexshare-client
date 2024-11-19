import React from 'react'

const NotFound = () => {
    return (
        <div className="error-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="error-content">
                            <h1>404</h1>
                            <h2>Page Not Found</h2>
                            <p>The page you are looking for doesn't exist or has been moved.</p>
                            <div className="button">
                                <a href="/" className="btn">Go To Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound