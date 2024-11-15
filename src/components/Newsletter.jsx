import React from 'react'

const Newsletter = () => {
    return (
        <div className="newsletter section">
            <div className="container">
                <div className="inner-content">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="title">
                                <i className="lni lni-alarm"></i>
                                <h2>
                                    Newsletter
                                </h2>
                                <p>
                                    We don't send spam so don't worry.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="form">
                                <form action="#" method="get" target="_blank" className="newsletter-form">
                                    <input name="email" placeholder="Your email address" type="email" />
                                    <div className="button">
                                        <button className="btn">Subscribe<span className="dir-part"></span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter