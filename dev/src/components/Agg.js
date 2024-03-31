// Aggregator.js
import React from 'react';

function Aggregator({ wishlist, removeFromWishlist }) {
  const handleRemove = (plantId) => {
    removeFromWishlist(plantId);
  };

  // Calculate total cost
  const totalCost = wishlist.reduce((total, plant) => total + plant.price, 0);

  return (
    <div className="aggregator">
      <h2>Wishlist</h2>
      <p>Total Items: {wishlist.length}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
      <ul>
        {wishlist.map((plant, index) => (
          <li key={index}>
            {plant.name} - ${plant.price}{' '}
            <button onClick={() => handleRemove(plant.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Aggregator;
