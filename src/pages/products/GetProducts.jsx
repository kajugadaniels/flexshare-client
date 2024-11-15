import React from 'react'

const GetProducts = () => {
    return (

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

        
    )
}

export default GetProducts