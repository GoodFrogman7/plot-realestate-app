import React from "react";
import Navbar from "./global-components/navbar";
import Banner from "./section-components/banner";
import Service from "./section-components/service";
import Video from "./section-components/video"; 
import Testimonial from "./section-components/testimonial";
import Team from "./section-components/team";
import FooterV2 from "./global-components/footer-v2";

const Home_V1 = () => {
  const navigate = require('react-router-dom').useNavigate();
  return (
    <div>
      <Navbar />
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '40vh', background: 'linear-gradient(90deg, #8000ff 0%, #b266ff 100%)', color: '#fff', marginBottom: 40
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '2rem 0 1rem 0', letterSpacing: '2px' }}>Welcome to Plot</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>India’s modern platform for subleasing, renting, and buying/selling property</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <button
            className="btn btn-base"
            style={{ fontSize: '1.2rem', padding: '1rem 2.5rem', borderRadius: 8, fontWeight: 'bold' }}
            onClick={() => navigate('/property-for-sale')}
          >
            I’m a Buyer
          </button>
          <button
            className="btn btn-base"
            style={{ fontSize: '1.2rem', padding: '1rem 2.5rem', borderRadius: 8, fontWeight: 'bold', background: '#5a00b3' }}
            onClick={() => navigate('/add-property')}
          >
            I’m a Seller
          </button>
        </div>
      </div>
      <Banner />
      <Service />
      <Video />
      <Testimonial />
      <Team />
      <FooterV2 />
    </div>
  );
};

export default Home_V1;
