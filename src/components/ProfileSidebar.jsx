import React from 'react'

const ProfileSidebar = () => {
    return (
        <div class="dashboard-sidebar">
                    <div class="user-image">
                        <img src="https://demo.graygrids.com/themes/classigrids/assets/images/dashboard/user-image.jpg" alt="#" />
                        <h3>
                            Jannet Doe
                            <span><a href="javascript:void(0)">jannet@doe.com</a></span>
                        </h3>
                    </div>
                    <div class="dashboard-menu">
                        <ul>
                            <li>
                                <a class="active" href="/profile">
                                    <i class="lni lni-dashboard"></i>
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="/profile">
                                    <i class="lni lni-pencil-alt"></i> 
                                    Edit Profile
                                </a>
                            </li>
                            <li>
                                <a href="/items">
                                    <i class="lni lni-bolt-alt"></i> 
                                    My Items
                                </a>
                            </li>
                            <li>
                                <a href="/favorite-items">
                                    <i class="lni lni-heart"></i> Favorite Items
                                </a>
                            </li>
                            <li>
                                <a href="/invoices">
                                    <i class="lni lni-printer"></i> 
                                    Invoice
                                </a>
                            </li>
                        </ul>
                        <div class="button">
                            <a class="btn" href="javascript:void(0)">Logout</a>
                        </div>
                    </div>
                </div>
    )
}

export default ProfileSidebar