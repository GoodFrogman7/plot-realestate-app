import React, { useState } from "react";
import { properties } from "../data/properties";

function PropertyGridForRent() {
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const filtered = properties.filter(
    (p) =>
      (p.type === "rent" || p.type === "sublease") &&
      (city === "" || p.city === city) &&
      (price === "" || p.price <= parseInt(price))
  );

  return (
    <div className="blog-page-area pt-5 go-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="product-search-inner bg-main">
              <div className="row custom-gutters-20">
                <div className="col-md-3 align-self-center">
                  <select value={city} onChange={e => setCity(e.target.value)}>
                    <option value="">All Cities</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Chennai">Chennai</option>
                  </select>
                </div>
                <div className="col-md-3 align-self-center">
                  <select value={price} onChange={e => setPrice(e.target.value)}>
                    <option value="">Any Price</option>
                    <option value="10000">Up to ₹10,000</option>
                    <option value="20000">Up to ₹20,000</option>
                    <option value="50000">Up to ₹50,000</option>
                  </select>
                </div>
                <div className="col-md-6 align-self-center">
                  <h5>{filtered.length} Properties</h5>
                </div>
              </div>
            </div>
          </div>
          {filtered.map((property) => (
            <div className="col-lg-4 col-md-6" key={property.id}>
              <div className="single-product-wrap style-2">
                <div className="thumb">
                  <img style={{ width: "330px", height: "248px" }} src={property.images[0]} alt="img" />
                </div>
                <div className="product-details-inner">
                  <h4>{property.title}</h4>
                  <ul className="meta-inner">
                    <li>{property.city}</li>
                    <li>{property.type === "sublease" ? "Sublease" : "For Rent"}</li>
                  </ul>
                  <p>{property.description}</p>
                  <span className="price">₹ {property.price.toLocaleString()}</span>
                  <div className="product-meta-bottom style-2">
                    <span>Owner: {property.owner}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyGridForRent;
