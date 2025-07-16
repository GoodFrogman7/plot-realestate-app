import React, { Component } from "react";
class Counter extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div
        className="couner-area bg-overlay pd-top-118 pd-bottom-120"
        style={{ background: "url(" + publicUrl + "assets/img/other/6.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="single-counter-inner">
                <h2>1,200+</h2>
                <p>Verified Listings</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="single-counter-inner">
                <h2>800+</h2>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="single-counter-inner">
                <h2>3</h2>
                <p>Major Indian Cities</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="single-counter-inner">
                <h2>100%</h2>
                <p>Secure Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
