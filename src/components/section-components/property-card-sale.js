import React from "react";
import PropTypes from "prop-types";

const PropertyCardSale = ({
  title,
  city,
  price,
  description,
  owner,
  images
}) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className="single-product-wrap style-2">
      <div className="thumb">
        <img style={{ width: "330px", height: "248px" }} src={images[0]} alt="img" />
      </div>
      <div className="product-details-inner">
        <h4>{title}</h4>
        <ul className="meta-inner">
          <li>{city}</li>
          <li>For Sale</li>
        </ul>
        <p>{description}</p>
        <span className="price">₹ {price.toLocaleString()}</span>
        <div className="product-meta-bottom style-2">
          <span>Owner: {owner}</span>
        </div>
      </div>
    </div>
  );
};

PropertyCardSale.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired
};

export default PropertyCardSale;
