import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer mobile-app">
                                <h3>Mobile Apps</h3>
                                <div className="app-button">
                                    <a href="#" className="btn">
                                        <i className="lni lni-play-store"></i>
                                        <span className="text">
                                            <span className="small-text">
                                                Get It On
                                            </span>
                                            Google Play
                                        </span>
                                    </a>
                                    <a href="#" className="btn">
                                        <i className="lni lni-apple"></i>
                                        <span className="text">
                                            <span className="small-text">
                                                Get It On
                                            </span>
                                            App Store
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer f-link">
                                <h3>Locations</h3>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <ul>
                                            <li><a href="#">Kigali City</a></li>
                                            <li><a href="#">Northern Province</a></li>
                                            <li><a href="#">Southern Province</a></li>
                                            <li><a href="#">Eastern Province</a></li>
                                            <li><a href="#">Western Province</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer f-link">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><a href="/who-we-are">About Us</a></li>
                                    <li><a href="/how-it-works">How It's Works</a></li>
                                    <li><a href="/login">Login</a></li>
                                    <li><a href="/register">Signup</a></li>
                                    <li><a href="/help-support">Help & Support</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer f-contact">
                                <h3>Contact</h3>
                                <ul>
                                    <li>
                                        Kigali Rwanda
                                    </li>
                                    <li>
                                        +250 788 888 888
                                        <br />
                                        info@flexshare.rw
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            <div className="col-12">
                                <div className="content">
                                    <ul className="footer-bottom-links">
                                        <li><a href="#">Terms of use</a></li>
                                        <li><a href="#"> Privacy Policy</a></li>
                                        <li><a href="#">Advanced Search</a></li>
                                        <li><a href="#">Site Map</a></li>
                                        <li><a href="#">Information</a></li>
                                    </ul>
                                    <p className="copyright-text">
                                        Developed by NEXCODE
                                    </p>
                                    <ul className="footer-social">
                                        <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                        <li><a href="#"><i className="lni lni-twitter-original"></i></a></li>
                                        <li><a href="#"><i className="lni lni-youtube"></i></a></li>
                                        <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer