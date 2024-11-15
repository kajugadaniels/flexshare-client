import React, { useState } from 'react'
import { Hero, Newsletter } from '../components'

const Home = () => {
    const [activeTab, setActiveTab] = useState('latest');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <Hero />

            <section className="items-grid section custom-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                                    Latest Products
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="single-head">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="single-grid wow fadeInUp" data-wow-delay=".2s">
                                    <div className="image">
                                        <a href="#" className="thumbnail">
                                            <img src="https://demo.graygrids.com/themes/classigrids/assets/images/items-grid/img1.jpg" alt="#" />
                                        </a>
                                        <div className="author">
                                            <div className="author-image">
                                                <a href="javascript:void(0)">
                                                    <img src="https://demo.graygrids.com/themes/classigrids/assets/images/items-grid/author-1.jpg" alt="#" />
                                                    <span>Smith jeko</span>
                                                </a>
                                            </div>
                                            <p className="sale">For Sale</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="top-content">
                                            <a href="javascript:void(0)" className="tag">
                                                Mobile Phones
                                            </a>
                                            <h3 className="title">
                                                <a href="#">
                                                    Apple Iphone X
                                                </a>
                                            </h3>
                                            <p className="update-time">
                                                Last Updated: 1 hours ago
                                            </p>
                                            <ul className="rating">
                                                <li><i className="lni lni-star-filled"></i></li>
                                                <li><i className="lni lni-star-filled"></i></li>
                                                <li><i className="lni lni-star-filled"></i></li>
                                                <li><i className="lni lni-star-filled"></i></li>
                                                <li><i className="lni lni-star-filled"></i></li>
                                                <li><a href="javascript:void(0)">(35)</a></li>
                                            </ul>
                                            <ul className="info-list">
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        <i className="lni lni-map-marker"></i>
                                                        New York, US
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        <i className="lni lni-timer"></i>
                                                        Feb 18, 2023
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bottom-content">
                                            <p className="price">
                                                Start From:
                                                <span>$200.00</span>
                                            </p>
                                            <a href="javascript:void(0)" className="like">
                                                <i className="lni lni-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-choose section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                                    Why Choose Us
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="choose-content">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="single-list wow fadeInUp" data-wow-delay=".2s">
                                            <i className="lni lni-book"></i>
                                            <h4>
                                                Fully Documented
                                            </h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="browse-cities section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                                    Browse By Cities
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="single-city wow fadeInUp" data-wow-delay=".2s">
                                <a href="#" className="info-box">
                                    <div className="image">
                                        <img src="https://demo.graygrids.com/themes/classigrids/assets/images/cities/img1.jpg" alt="#" />
                                    </div>
                                    <div className="content">
                                        <h4 className="name">
                                            New York City
                                            <span>155 Ads</span>
                                        </h4>
                                    </div>
                                    <div className="more-btn">
                                        <i className="lni lni-circle-plus"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="call-action overlay section">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8 offset-lg-2 col-12">
                            <div className="inner">
                                <div className="content">
                                    <h2 className="wow fadeInUp" data-wow-delay=".4s">Do you have something to sell?</h2>
                                    <p className="wow fadeInUp" data-wow-delay=".6s">Post your ad for free on ClassiGrids</p>
                                    <div className="button wow fadeInUp" data-wow-delay=".8s">
                                        <a href="javascript:void(0)" className="btn">Post an ad now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="items-tab section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Trending Ads</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className={`nav-link ${activeTab === 'latest' ? 'active show' : ''}`}
                                        id="nav-latest-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-latest"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-latest"
                                        aria-selected={activeTab === 'latest'}
                                        onClick={() => handleTabClick('latest')}>
                                        Latest Ads
                                    </button>
                                    <button className={`nav-link ${activeTab === 'popular' ? 'active show' : ''}`}
                                        id="nav-popular-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-popular"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-popular"
                                        aria-selected={activeTab === 'popular'}
                                        onClick={() => handleTabClick('popular')}>
                                        Popular Ads
                                    </button>
                                    <button className={`nav-link ${activeTab === 'random' ? 'active show' : ''}`}
                                        id="nav-random-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-random"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-random"
                                        aria-selected={activeTab === 'random'}
                                        onClick={() => handleTabClick('random')}>
                                        Random Ads
                                    </button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className={`tab-pane fade ${activeTab === 'latest' ? 'show active' : ''}`} id="nav-latest" role="tabpanel" aria-labelledby="nav-latest-tab">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 col-12">
                                            <div className="single-item-grid">
                                                <div className="image">
                                                    <a href="#">
                                                        <img src="https://demo.graygrids.com/themes/classigrids/assets/images/items-tab/item-3.jpg" alt="#" />
                                                    </a>
                                                    <i className=" cross-badge lni lni-bolt"></i>
                                                    <span className="flat-badge sale">Sale</span>
                                                </div>
                                                <div className="content">
                                                    <a href="javascript:void(0)" className="tag">
                                                        Mobile
                                                    </a>
                                                    <h3 className="title">
                                                        <a href="#">
                                                            Apple Iphone X
                                                        </a>
                                                    </h3>
                                                    <p className="location">
                                                        <a href="javascript:void(0)">
                                                            <i className="lni lni-map-marker"></i>
                                                            Boston
                                                        </a>
                                                    </p>
                                                    <ul className="info">
                                                        <li className="price">
                                                            $890.00
                                                        </li>
                                                        <li className="like">
                                                            <a href="javascript:void(0)">
                                                                <i className="lni lni-heart"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane fade ${activeTab === 'popular' ? 'show active' : ''}`} id="nav-popular" role="tabpanel" aria-labelledby="nav-popular-tab">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 col-12">
                                            <div className="single-item-grid">
                                                <div className="image">
                                                    <a href="#">
                                                        <img src="https://demo.graygrids.com/themes/classigrids/assets/images/items-tab/item-1.jpg" alt="#" />
                                                    </a>
                                                    <i className=" cross-badge lni lni-bolt"></i>
                                                    <span className="flat-badge sale">Sale</span>
                                                </div>
                                                <div className="content">
                                                    <a href="javascript:void(0)" className="tag">
                                                        Mobile
                                                    </a>
                                                    <h3 className="title">
                                                        <a href="#">
                                                            Apple Iphone X
                                                        </a>
                                                    </h3>
                                                    <p className="location">
                                                        <a href="javascript:void(0)">
                                                            <i className="lni lni-map-marker"></i>
                                                            Boston
                                                        </a>
                                                    </p>
                                                    <ul className="info">
                                                        <li className="price">
                                                            $890.00
                                                        </li>
                                                        <li className="like">
                                                            <a href="javascript:void(0)">
                                                                <i className="lni lni-heart"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane fade ${activeTab === 'random' ? 'show active' : ''}`} id="nav-random" role="tabpanel" aria-labelledby="nav-random-tab">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 col-12">
                                            <div className="single-item-grid">
                                                <div className="image">
                                                    <a href="#">
                                                        <img src="https://demo.graygrids.com/themes/classigrids/assets/images/items-tab/item-2.jpg" alt="#" />
                                                    </a>
                                                    <i className=" cross-badge lni lni-bolt"></i>
                                                    <span className="flat-badge sale">Sale</span>
                                                </div>
                                                <div className="content">
                                                    <a href="javascript:void(0)" className="tag">
                                                        Mobile
                                                    </a>
                                                    <h3 className="title">
                                                        <a href="#">
                                                            Apple Iphone X
                                                        </a>
                                                    </h3>
                                                    <p className="location">
                                                        <a href="javascript:void(0)">
                                                            <i className="lni lni-map-marker"></i>
                                                            Boston
                                                        </a>
                                                    </p>
                                                    <ul className="info">
                                                        <li className="price">
                                                            $890.00
                                                        </li>
                                                        <li className="like">
                                                            <a href="javascript:void(0)">
                                                                <i className="lni lni-heart"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="how-works section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                                    How it Works
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="single-work wow fadeInUp" data-wow-delay=".2s">
                                <span className="serial">
                                    01
                                </span>
                                <h3>
                                    Create Account
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet constur adipisicing sed do eiusmod tempor incididunt labore.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="single-work wow fadeInUp" data-wow-delay=".4s">
                                <span className="serial">02</span>
                                <h3>
                                    Post Your Ads
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet constur adipisicing sed do eiusmod tempor incididunt labore.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="single-work wow fadeInUp" data-wow-delay=".6s">
                                <span className="serial">03</span>
                                <h3>
                                    Sell Your Item
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet constur adipisicing sed do eiusmod tempor incididunt labore.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter />
        </>
    )
}

export default Home