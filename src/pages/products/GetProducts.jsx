import React from 'react'
import { Newsletter, ProductSidebar } from '../../components'

const GetProducts = () => {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Products</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li>
                                    <a href="/">
                                        Home
                                    </a>
                                </li>
                                <li>Products</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section className="category-page section">
                <div className="container">
                    <div className="row">
                        <ProductSidebar />
                        <div className="col-lg-9 col-md-8 col-12">
                            <div className="category-grid-list">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="category-grid-topbar">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <h3 className="title">Showing 1-12 of 21 ads found</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="nav-grid" role="tabpanel"
                                                aria-labelledby="nav-grid-tab">
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-6 col-12">
                                                        <div className="single-item-grid">
                                                            <div className="image">
                                                                <a href="#">
                                                                    <img src="https://demo.graygrids.com/themes/classigrids/assets/images/items-tab/item-7.jpg" alt="#" />
                                                                </a>
                                                                <i className=" cross-badge lni lni-bolt"></i>
                                                                <span className="flat-badge sale">Sale</span>
                                                            </div>
                                                            <div className="content">
                                                                <a href="javascript:void(0)" className="tag">Mobile</a>
                                                                <h3 className="title">
                                                                    <a href="#">Apple Iphone X</a>
                                                                </h3>
                                                                <p className="location"><a href="javascript:void(0)"><i className="lni lni-map-marker">
                                                                </i>Boston</a></p>
                                                                <ul className="info">
                                                                    <li className="price">$890.00</li>
                                                                    <li className="like"><a href="javascript:void(0)"><i
                                                                        className="lni lni-heart"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="pagination left">
                                                            <ul className="pagination-list">
                                                                <li><a href="javascript:void(0)">1</a></li>
                                                                <li className="active"><a href="javascript:void(0)">2</a></li>
                                                                <li><a href="javascript:void(0)">3</a></li>
                                                                <li><a href="javascript:void(0)">4</a></li>
                                                                <li><a href="javascript:void(0)"><i className="lni lni-chevron-right"></i></a></li>
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
                    </div>
                </div>
            </section>

            <Newsletter />
        </>
    )
}

export default GetProducts