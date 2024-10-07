import React from 'react';
import './ListingCard.css'; // Add your styles

const ListingCard = ({ image, title, type, guests, bedrooms, bathrooms, price, rating }) => {
  return (
    <div className="listing-card">
      <img src={image} alt={title} />
      <div className="listing-info">
        <h3>{title}</h3>
        <p>{type} • {guests} guests • {bedrooms} bedrooms • {bathrooms} bathrooms</p>
        <p>${price} per night</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default ListingCard;
