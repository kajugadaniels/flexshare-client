import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Newsletter } from '../components'

const WhoWeAre = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        className: "client-logo-carousel d-flex align-items-center justify-content-between",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">About Us</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li>
                                    <a href="/">
                                        Home
                                    </a>
                                </li>
                                <li>Who We Are</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section class="about-us section">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-6 col-md-12 col-12">
                            <div class="content-left wow fadeInLeft" data-wow-delay=".3s">
                                <img src="https://meatechwatch.com/wp-content/uploads/2024/05/DALL%C2%B7E-2024-05-21-15.55.06-A-vibrant-scene-in-Rwanda-showcasing-digital-innovation.-The-image-features-a-modern-innovation-hub-with-young-tech-professionals-working-on-computers.webp" alt="#" />
                                <a href="#" target='_blank' class="glightbox video"><i class="lni lni-play"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-12">
                            <div class="content-right wow fadeInRight" data-wow-delay=".5s">
                                <span class="sub-heading">About</span>
                                <h2>
                                    About Our Company
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-achievement section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-achievement wow fadeInUp" data-wow-delay=".2s">
                                <h3 className="counter"><span id="secondo1" className="countup" cup-end="1250">1250</span>+</h3>
                                <p>Regular Ads</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-achievement wow fadeInUp" data-wow-delay=".4s">
                                <h3 className="counter"><span id="secondo2" className="countup" cup-end="350">350</span>+</h3>
                                <p>Locations</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-achievement wow fadeInUp" data-wow-delay=".6s">
                                <h3 className="counter"><span id="secondo3" className="countup" cup-end="2500">2500</span>+</h3>
                                <p>Reguler Members</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-achievement wow fadeInUp" data-wow-delay=".6s">
                                <h3 className="counter"><span id="secondo3" className="countup" cup-end="250">250</span>+</h3>
                                <p>Premium Ads</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="client-logo-section">
                <div className="container">
                    <div className="client-logo-wrapper">
                        <Slider {...settings}>
                            <div className="client-logo">
                                <img src="https://demo.graygrids.com/themes/classigrids/assets/images/clients/client2.svg" alt="Client Logo" />
                            </div>
                            <div className="client-logo">
                                <img src="https://demo.graygrids.com/themes/classigrids/assets/images/clients/client2.svg" alt="Client Logo" />
                            </div>
                            <div className="client-logo">
                                <img src="https://demo.graygrids.com/themes/classigrids/assets/images/clients/client2.svg" alt="Client Logo" />
                            </div>
                            <div className="client-logo">
                                <img src="https://demo.graygrids.com/themes/classigrids/assets/images/clients/client2.svg" alt="Client Logo" />
                            </div>
                            <div className="client-logo">
                                <img src="https://demo.graygrids.com/themes/classigrids/assets/images/clients/client2.svg" alt="Client Logo" />
                            </div>
                            <div className="client-logo">
                                <img src="https://demo.graygrids.com/themes/classigrids/assets/images/clients/client2.svg" alt="Client Logo" />
                            </div>
                            <div className="client-logo">
                                <img src="https://demo.graygrids.com/themes/classigrids/assets/images/clients/client2.svg" alt="Client Logo" />
                            </div>
                            <div className="client-logo">
                                <img src="https://demo.graygrids.com/themes/classigrids/assets/images/clients/client2.svg" alt="Client Logo" />
                            </div>
                            <div className="client-logo">
                                <img src="https://demo.graygrids.com/themes/classigrids/assets/images/clients/client2.svg" alt="Client Logo" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            <Newsletter />
        </>
    )
}

export default WhoWeAre