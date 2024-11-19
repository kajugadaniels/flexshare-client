import React, { useState } from 'react';

const Profile = () => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState('item-info');

    // Function to handle tab click
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="main-content">
            <div className="dashboard-block mt-0">
                <h3 className="block-title">Post Ad</h3>
                <div className="inner-block">
                    <div className="post-ad-tab">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className={`nav-link ${activeTab === 'item-info' ? 'active' : ''}`}
                                    id="nav-item-info-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-item-info"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-item-info"
                                    aria-selected={activeTab === 'item-info'}
                                    onClick={() => handleTabClick('item-info')}>
                                    <span className="serial">01</span> Step <span className="sub-title">Profile Information</span>
                                </button>
                                <button className={`nav-link ${activeTab === 'item-details' ? 'active' : ''}`}
                                    id="nav-item-details-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-item-details"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-item-details"
                                    aria-selected={activeTab === 'item-details'}
                                    onClick={() => handleTabClick('item-details')}>
                                    <span className="serial">02</span> Step <span className="sub-title">User Details</span>
                                </button>
                                <button className={`nav-link ${activeTab === 'user-info' ? 'active' : ''}`}
                                    id="nav-user-info-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-user-info"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-user-info"
                                    aria-selected={activeTab === 'user-info'}
                                    onClick={() => handleTabClick('user-info')}>
                                    <span className="serial">03</span> Step <span className="sub-title">Password Information</span>
                                </button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className={`tab-pane fade ${activeTab === 'item-info' ? 'show active' : ''}`} id="nav-item-info" role="tabpanel" aria-labelledby="nav-item-info-tab">
                                <div className="step-one-content">
                                    <form className="default-form-style" method="post" action="#">
                                        <div className="row">
                                            <div className="col-lg-6 col-12">
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input name="last-name" type="text" placeholder="Enter name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="form-group">
                                                    <label>Phone Number</label>
                                                    <input name="usernames" type="text" placeholder="Enter phone number" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="form-group">
                                                    <label>Email Address</label>
                                                    <input name="email" type="email" placeholder="Enter email address" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="form-group upload-image">
                                                    <label>Profile Image</label>
                                                    <input name="profile-image" type="file" placeholder="Upload Image" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group button mb-0">
                                                    <button type="submit" className="btn ">Update Profile</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'item-details' ? 'show active' : ''}`} id="nav-item-details" role="tabpanel" aria-labelledby="nav-item-details-tab">
                                <div className="step-two-content">
                                    <form className="default-form-style" method="post" action="#">
                                        <div className="row">
                                            <div className="col-lg-6 col-12">
                                                <div className="form-group">
                                                    <label>ID Number</label>
                                                    <input name="price" type="text" placeholder="Address" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="form-group">
                                                    <label>Address</label>
                                                    <input name="price" type="text" placeholder="Address" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group message">
                                                    <label>About You</label>
                                                    <textarea name="message" placeholder="Enter about yourself"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group button mb-0">
                                                    <button type="submit" className="btn ">Update Info</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'user-info' ? 'show active' : ''}`} id="nav-user-info" role="tabpanel" aria-labelledby="nav-user-info-tab">
                                <div className="step-three-content">
                                    <form className="default-form-style" method="post" action="#">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Current Password</label>
                                                    <input name="current-password" type="password" placeholder="Enter old password" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>New Password</label>
                                                    <input name="new-password" type="password" placeholder="Enter new password" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Retype Password</label>
                                                    <input name="retype-password" type="password" placeholder="Retype password" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group button mb-0">
                                                    <button type="submit" className="btn ">Update Password</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
