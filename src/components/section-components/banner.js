import React, { Component } from "react";
import { Link } from "react-router-dom";
class Banner extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div
        className="banner-area banner-area-1 banner-area-bg"
        style={{ background: "url(" + publicUrl + "assets/img/banner/1.png)" }}
      >
        <div className="container">
          <div className="banner-area-inner">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="banner-inner text-center">
                  <p>
                    Find your next home or investment in Delhi, Mumbai, or Chennai. Discover verified properties for rent and sale, all on Plot — India’s trusted real estate platform.
                  </p>
                  <div className="line" />
                  <h2>India’s Best Way to Find Your Perfect Property</h2>
                </div>
              </div>
              <div className="col-lg-8 mt-4">
                <form className="main-search-inner">
                  <div className="row custom-gutters-10">
                    <div className="col-md-3">
                      <div className="single-select-inner">
                        <select defaultValue={0}>
                          <option value={0}>Location</option>
                          <option value={1}>Delhi</option>
                          <option value={2}>Mumbai</option>
                          <option value={3}>Chennai</option>
                          <option value={4}>Gujarat</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="single-select-inner">
                        <select defaultValue={0}>
                          <option value={0}>Property</option>
                          <option value={1}>Apartments</option>
                          <option value={2}>Commercial</option>
                          <option value={3}>Villas</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="single-select-inner">
                        <select defaultValue={0}>
                          <option value={0}>Price</option>
                          <option value={1}>Rs.(0.5-1.0) Crore</option>
                          <option value={2}>Rs.(1.0-2.0) Crore</option>
                          <option value={3}>Rs.(2.0-5.0) Crore</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <Link
                        className="btn btn-base w-100"
                        to="/property-for-sale"
                      >
                        <i className="fa fa-search mr-1" /> Search
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
