import React from 'react'

const Dashboard = () => {
    return (
        <div className="main-content">
            <div class="main-content">
                <div class="details-lists">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="single-list">
                                <div className="list-icon">
                                    <i className="lni lni-checkmark-circle"></i>
                                </div>
                                <h3>
                                    340
                                    <span>
                                        Total Posted Items
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="single-list two">
                                <div className="list-icon">
                                    <i className="lni lni-bolt"></i>
                                </div>
                                <h3>
                                    23
                                    <span>
                                        Rented Items
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="single-list three">
                                <div className="list-icon">
                                    <i className="lni lni-emoji-sad"></i>
                                </div>
                                <h3>
                                    45
                                    <span>
                                        Renting Items
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="activity-log dashboard-block">
                                <h3 className="block-title">My Activity Log</h3>
                                <ul>
                                    <li>
                                        <div className="log-icon">
                                            <i className="lni lni-alarm"></i>
                                        </div>
                                        <a href="javascript:void(0)" className="title">
                                            Your Profile Updated!
                                        </a>
                                        <span className="time">
                                            12 Minutes Ago
                                        </span>
                                        <span className="remove">
                                            <a href="javascript:void(0)">
                                                <i className="lni lni-close"></i>
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="recent-items dashboard-block">
                                <h3 className="block-title">
                                    Recent Ads
                                </h3>
                                <ul>
                                    <li>
                                        <div className="image">
                                            <a href="javascript:void(0)">
                                                <img src="assets/images/dashboard/recent-items/item1.jpg" alt="#" />
                                            </a>
                                        </div>
                                        <a href="javascript:void(0)" className="title">
                                            iPhone 11 Pro Max
                                        </a>
                                        <span className="time">
                                            12 Minutes Ago
                                        </span>
                                        <span className="remove">
                                            <a href="javascript:void(0)">
                                                <i className="lni lni-close"></i>
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard