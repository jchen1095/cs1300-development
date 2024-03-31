// PlantItem.js
import React from 'react';

function PlantItem({ plant, addToWishlist }) {
  const { id, name, image, category, price } = plant;

  return (
    <div className="plant-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <button onClick={() => addToWishlist(plant)}>Add to Wishlist</button>
    </div>
  );
}

export default PlantItem;
