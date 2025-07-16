import React, { Component } from 'react';
import axios from 'axios';

class Service extends Component {
	constructor(props)
	{
		super(props);

		this.state = {
	  		AboutUs: []
		}
  	}

	componentDidMount() {

  		const $ = window.$;

   		$( '.footer-area.style-two' ).removeClass( 'mg-top-100' );

   		axios.get('http://localhost:5000/AboutUs/')
   		.then(response => {
	  	if (response.data) {
		 this.setState({      
		   AboutUs: response.data
			});
	  	}
		})
		.catch((error) => {
	 		console.log(error);
		})
  	}

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="service-area">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/1.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4>Verified Listings</h4>
			            <p>All properties on Plot are verified for authenticity and legal compliance in India’s top cities.</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/2.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4>Expert Local Support</h4>
			            <p>Our team helps you navigate the property market in Delhi, Mumbai, and Chennai with confidence.</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap mb-0">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/3.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4>Secure Transactions</h4>
			            <p>Enjoy peace of mind with secure payments and transparent processes on Plot.</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap mb-0">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/4.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4>Flexible Subleasing</h4>
			            <p>Find or offer sublease options tailored for India’s urban professionals and students.</p>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>


        }
}

export default Service