import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header, ProfileSidebar } from '../components'

const ProfileLayout = () => {
    return (
        <>
            <Header />

            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">
                                    Dashboard
                                </h1>
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
                                    Dashboard
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section class="dashboard section">
                <div class="container">
                    <div class="row">
                        <div className="col-lg-3 col-md-4 col-12">
                            <ProfileSidebar />
                        </div>
                        <div class="col-lg-9 col-md-8 col-12">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default ProfileLayout