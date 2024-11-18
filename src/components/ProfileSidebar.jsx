import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const ProfileSidebar = () => {
    const location = useLocation();

    const isActive = (paths) => {
        const currentPath = location.pathname;

        return paths.some((path) => {
            if (path.includes(':')) {
                const regex = new RegExp(`^${path.replace(':id', '[^/]+')}$`);
                return regex.test(currentPath);
            }
            return currentPath === path;
        })
            ? 'active'
            : '';
    };

    return (
        <div className="dashboard-sidebar">
                    <div className="user-image">
                        <img src="https://demo.graygrids.com/themes/classigrids/assets/images/dashboard/user-image.jpg" alt="#" />
                        <h3>
                            Jannet Doe
                            <span><a href="javascript:void(0)">jannet@doe.com</a></span>
                        </h3>
                    </div>
                    <div className="dashboard-menu">
                        <ul>
                            <li>
                                <a className={`${isActive(['/dashboard'])}`} href="/dashboard">
                                    <i className="lni lni-dashboard"></i>
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a className={`${isActive(['/profile'])}`} href="/profile">
                                    <i className="lni lni-pencil-alt"></i> 
                                    Edit Profile
                                </a>
                            </li>
                            <li>
                                <a className={`${isActive(['/items', '/item/add', '/item/edit/:slug'])}`} href="/items">
                                    <i className="lni lni-bolt-alt"></i> 
                                    My Items
                                </a>
                            </li>
                            <li>
                                <a className={`${isActive(['/favorite-items'])}`} href="/favorite-items">
                                    <i className="lni lni-heart"></i> Favorite Items
                                </a>
                            </li>
                            <li>
                                <a className={`${isActive(['/invoices'])}`} href="/invoices">
                                    <i className="lni lni-printer"></i> 
                                    Invoice
                                </a>
                            </li>
                        </ul>
                        <div className="button">
                            <a className="btn" href="javascript:void(0)">Logout</a>
                        </div>
                    </div>
                </div>
    )
}

export default ProfileSidebar