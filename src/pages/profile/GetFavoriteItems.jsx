import React from 'react'

const GetFavoriteItems = () => {
    return (
        <div className="main-content">
            <div className="dashboard-block mt-0">
                <h3 className="block-title">My Ads</h3>
                <nav className="list-nav">
                    <ul>
                        <li className="active">
                            <a href="javascript:void(0)">
                                Featured 
                                <span>
                                    42
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="my-items">
                    <div className="item-list-title">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-5 col-12">
                                <p>Item Title</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-12">
                                <p>Category</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-12">
                                <p>Condition</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12 align-right">
                                <p>Action</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-item-list">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-5 col-12">
                                <div className="item-image">
                                    <img src="https://demo.graygrids.com/themes/classigrids/assets/images/my-items/my-item1.png" alt="#" />
                                    <div className="content">
                                        <h3 className="title"><a href="javascript:void(0)">HP Laptop 6560b core i7</a></h3>
                                        <span className="price">$750</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-12">
                                <p>Electronic</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-12">
                                <p>New</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12 align-right">
                                <ul className="action-btn">
                                    <li><a href="/item/edit/product"><i className="lni lni-pencil"></i></a></li>
                                    <li><a href="/product/product-name"><i className="lni lni-eye"></i></a></li>
                                    <li><a href="javascript:void(0)"><i className="lni lni-trash"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
    )
}

export default GetFavoriteItems