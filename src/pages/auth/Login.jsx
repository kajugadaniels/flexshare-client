import React from 'react'

const Login = () => {
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
                                    <a href="/">
                                        Home
                                    </a>
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
                                <form>
                                    <div className="form-group">
                                        <label>Username or email</label>
                                        <input name="email" type="email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input name="password" type="password" />
                                    </div>
                                    <div className="check-and-pass">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input width-auto" />
                                                    <label className="form-check-label">Remember me</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <a href="javascript:void(0)" className="lost-pass">
                                                    Lost your password?
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button type="submit" className="btn">
                                            Login Now
                                        </button>
                                    </div>
                                    <p className="outer-link">
                                        Don't have an account? <a href="/register">Register here</a>
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

export default Login