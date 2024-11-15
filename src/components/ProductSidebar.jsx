import React from 'react'

const ProductSidebar = () => {
    return (
        <div className="col-lg-3 col-md-4 col-12">
            <div className="category-sidebar">
                <div className="single-widget search">
                    <h3>
                        Search
                    </h3>
                    <form action="#">
                        <input type="text" placeholder="Search Here..." />
                        <button type="submit"><i className="lni lni-search-alt"></i></button>
                    </form>
                </div>
                <div className="single-widget">
                    <h3>
                        All Categories
                    </h3>
                    <ul className="list">
                        <li>
                            <a href="javascript:void(0)"><i className="lni lni-dinner"></i> Hotel & Travels<span>15</span></a>
                        </li>
                    </ul>
                </div>
                <div className="single-widget range">
                    <h3>Price Range</h3>
                    <input type="range" className="form-range" name="range" step="1" min="100" max="10000" value="10" onchange="rangePrimary.value=value" />
                    <div className="range-inner">
                        <label>$</label>
                        <input type="text" id="rangePrimary" placeholder="100" />
                    </div>
                </div>
                <div className="single-widget condition">
                    <h3>Condition</h3>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                        <label className="form-check-label" for="flexCheckDefault1">
                            All
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                        <label className="form-check-label" for="flexCheckDefault2">
                            New
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                        <label className="form-check-label" for="flexCheckDefault3">
                            Used
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSidebar