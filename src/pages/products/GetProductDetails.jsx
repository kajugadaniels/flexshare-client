import React, { useState } from 'react';
import { Newsletter } from '../../components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GetProductDetails = () => {
    const [mainImgSrc, setMainImgSrc] = useState("https://demo.graygrids.com/themes/classigrids/assets/images/item-details/image1.jpg");
    const images = [
        "https://demo.graygrids.com/themes/classigrids/assets/images/item-details/image1.jpg",
        "https://demo.graygrids.com/themes/classigrids/assets/images/item-details/image2.jpg",
        "https://demo.graygrids.com/themes/classigrids/assets/images/item-details/image3.jpg",
        "https://demo.graygrids.com/themes/classigrids/assets/images/item-details/image4.jpg",
        "https://demo.graygrids.com/themes/classigrids/assets/images/item-details/image5.jpg"
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        beforeChange: (current, next) => setMainImgSrc(images[next])
    };

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Product Details</h1>
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
                                    <a href="/products">
                                        Products
                                    </a>
                                </li>
                                <li>Product Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section className="item-details section">
            <div className="container">
                <div className="top-area">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="product-images">
                                <main id="gallery">
                                    <div className="main-img">
                                        <img src={mainImgSrc} id="current" alt="#" />
                                    </div>
                                    <Slider {...sliderSettings}>
                                        {images.map((imgSrc, index) => (
                                            <div key={index}>
                                                <img src={imgSrc} className="img" alt="#" style={{ cursor: 'pointer', opacity: imgSrc === mainImgSrc ? 0.6 : 1 }} onClick={() => setMainImgSrc(imgSrc)} />
                                            </div>
                                        ))}
                                    </Slider>
                                </main>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="product-info">
                                    <h2 className="title">
                                        MacBook Pro 13-inch
                                    </h2>
                                    <p className="location">
                                        <i className="lni lni-map-marker"></i>
                                        <a href="javascript:void(0)">
                                            New York, USA
                                        </a>
                                    </p>
                                    <h3 className="price">
                                        $999
                                    </h3>
                                    <div className="list-info">
                                        <h4>
                                            Informations
                                        </h4>
                                        <ul>
                                            <li><span>Condition:</span> New</li>
                                            <li><span>Brand:</span> Apple</li>
                                            <li><span>Model:</span> Mackbook Pro</li>
                                        </ul>
                                    </div>
                                    <div className="contact-info">
                                        <ul>
                                            <li>
                                                <a href="tel:+002562352589" className="call">
                                                    <i className="lni lni-phone-set"></i>
                                                    +00 256 235 2589
                                                    <span>Call & Get more info</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="mailto:example@gmail.com" className="mail">
                                                    <i className="lni lni-envelope"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="social-share">
                                        <h4>Share Ad</h4>
                                        <ul>
                                            <li><a href="javascript:void(0)" className="facebook"><i className="lni lni-facebook-filled"></i></a></li>
                                            <li><a href="javascript:void(0)" className="twitter"><i className="lni lni-twitter-original"></i></a></li>
                                            <li><a href="javascript:void(0)" className="google"><i className="lni lni-google"></i></a></li>
                                            <li><a href="javascript:void(0)" className="linkedin"><i className="lni lni-linkedin-original"></i></a></li>
                                            <li><a href="javascript:void(0)" className="pinterest"><i className="lni lni-pinterest"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-details-blocks">
                        <div className="row">
                            <div className="col-lg-8 col-md-7 col-12">
                                <div className="single-block description">
                                    <h3>Description</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </p>
                                    <ul>
                                        <li>Model: Apple MacBook Pro 13.3-Inch MYDA2</li>
                                        <li>Apple M1 chip with 8-core CPU and 8-core GPU</li>
                                        <li>8GB RAM</li>
                                        <li>256GB SSD</li>
                                        <li>13.3-inch 2560x1600 LED-backlit Retina Display</li>
                                    </ul>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                                    </p>
                                </div>
                                <div className="single-block tags">
                                    <h3>Tags</h3>
                                    <ul>
                                        <li><a href="javascript:void(0)">Bike</a></li>
                                        <li><a href="javascript:void(0)">Services</a></li>
                                        <li><a href="javascript:void(0)">Brand</a></li>
                                        <li><a href="javascript:void(0)">Popular</a></li>
                                    </ul>
                                </div>
                                <div className="single-block comments">
                                    <h3>Comments</h3>
                                    <div className="single-comment">
                                        <img src="https://demo.graygrids.com/themes/classigrids/assets/images/testimonial/testi2.jpg" alt="#" />
                                        <div className="content">
                                            <h4>
                                                John Doe
                                            </h4>
                                            <span>
                                                25 Feb, 2023
                                            </span>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                            </p>
                                            <a href="javascript:void(0)" className="reply">
                                                <i className="lni lni-reply"></i>
                                                Reply
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-block comment-form">
                                    <h3>Post a comment</h3>
                                    <form action="#" method="POST">
                                        <div className="row">
                                            <div className="col-lg-6 col-12">
                                                <div className="form-box form-group">
                                                    <input type="text" name="name" className="form-control form-control-custom" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="form-box form-group">
                                                    <input type="email" name="email" className="form-control form-control-custom" placeholder="Your Email" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-box form-group">
                                                    <textarea name="#" className="form-control form-control-custom" placeholder="Your Comments"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="button">
                                                    <button type="submit" className="btn">Post Comment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 col-12">
                                <div className="item-details-sidebar">
                                    <div className="single-block author">
                                        <h3>Author</h3>
                                        <div className="content">
                                            <img src="https://demo.graygrids.com/themes/classigrids/assets/images/testimonial/testi3.jpg" alt="#" />
                                            <h4>
                                                Jannet Doe
                                            </h4>
                                            <span>
                                                Member Since May 15,2023
                                            </span>
                                            <a href="javascript:void(0)" className="see-all">
                                                See Profile
                                            </a>
                                        </div>
                                    </div>
                                    <div className="single-block contant-seller comment-form ">
                                        <h3>Contact Seller</h3>
                                        <form action="#" method="POST">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-box form-group">
                                                        <input type="text" name="name" className="form-control form-control-custom" placeholder="Your Name" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-box form-group">
                                                        <input type="email" name="email" className="form-control form-control-custom" placeholder="Your Email" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-box form-group">
                                                        <textarea name="#" className="form-control form-control-custom" placeholder="Your Message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="button">
                                                        <button type="submit" className="btn">Send Message</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="single-block ">
                                        <h3>Location</h3>
                                        <div className="mapouter">
                                            <div className="gmap_canvas">
                                                <iframe width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter />
        </>
    )
}

export default GetProductDetails