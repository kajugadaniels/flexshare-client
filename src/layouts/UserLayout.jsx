import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

const UserLayout = () => {
    return (
        <div>
            {/* <div className="preloader">
                <div className="preloader-inner">
                    <div className="preloader-icon">
                        <span></span>
                        <span></span>
                    </div>
                </div>
             </div> */}

            <Header />

            <Outlet />

            <Footer />
        </div>
    )
}

export default UserLayout