import React from 'react'

const Register = () => {
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
                                    <a href="/">
                                        Home
                                    </a>
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
                                <form>
                                    <div className="alt-option">
                                        <span>Or</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input name="password" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input name="email" type="email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input name="password" type="password" />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input name="password" type="password" />
                                    </div>
                                    <div className="check-and-pass">
                                        <div className="row align-items-center">
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input width-auto" />
                                                    <label className="form-check-label">
                                                        Agree to our <a href="javascript:void(0)">Terms and Conditions</a>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button type="submit" className="btn">
                                            Sign Up
                                        </button>
                                    </div>
                                    <p className="outer-link">
                                        Already have an account? <a href="/login">Login Now</a>
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

export default Register