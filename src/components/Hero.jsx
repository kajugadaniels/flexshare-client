import React from 'react'

const Hero = () => {
    return (
        <section className="hero-area overlay">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
                        <div className="hero-text text-center">
                            <div className="section-heading">
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    Welcome to FlexShare
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
                                    Rent the latest gadgets when you need them. FlexShare makes accessing <br /> cutting-edge technology easy and affordable—no ownership required!
                                </p>
                            </div>
                            <div className="search-form wow fadeInUp" data-wow-delay=".7s">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12 p-0">
                                        <div className="search-input">
                                            <label for="keyword"><i className="lni lni-search-alt theme-color"></i></label>
                                            <input type="text" name="keyword" id="keyword" placeholder="Product keyword" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-12 p-0">
                                        <div className="search-input">
                                            <label for="category"><i className="lni lni-grid-alt theme-color"></i></label>
                                            <select name="category" id="category">
                                                <option value="none" selected disabled>Categories</option>
                                                <option value="none">Book</option>
                                                <option value="none">Camera</option>
                                                <option value="none">Electronics</option>
                                                <option value="none">CLothes</option>
                                                <option value="none">House</option>
                                                <option value="none">Office</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-12 p-0">
                                        <div className="search-input">
                                            <label for="location"><i className="lni lni-map-marker theme-color"></i></label>
                                            <select name="location" id="location">
                                                <option value="none" selected disabled>Locations</option>
                                                <option value="none">Kicukiro</option>
                                                <option value="none">Nyarugenge</option>
                                                <option value="none">Gasabo</option>
                                                <option value="none">Rwamagana</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-12 p-0">
                                        <div className="search-btn button">
                                            <button className="btn"><i className="lni lni-search-alt"></i> Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero