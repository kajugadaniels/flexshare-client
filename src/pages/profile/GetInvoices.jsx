import React from 'react'

const GetInvoices = () => {
    return (
        <div className="main-content">
            <div className="dashboard-block mt-0">
                <h3 className="block-title">invoice</h3>
                <div className="invoice-items default-list-style">
                    <div className="default-list-title">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4 col-12">
                                <p>Package</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-12">
                                <p>Invoice date</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-12">
                                <p>Due date</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-12">
                                <p>Status</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-12 align-right">
                                <p>Action</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-list">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4 col-12">
                                <p>Free Package
                                    <span>$0.00</span>
                                </p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-12">
                                <p>Jan 13,2023</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-12">
                                <p>Feb 5,2021</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-12">
                                <p className="paid">Paid</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-12 align-right">
                                <ul className="action-btn">
                                    <li><a href="javascript:void(0)"><i className="lni lni-eye"></i></a></li>
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

export default GetInvoices