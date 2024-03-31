// PlantList.js
import React from 'react';
import PlantItem from './PlantItem';
import './PlantList.css';

function PlantList({ plants, addToWishlist }) {
  return (
    <div className="plant-list">
      <div className="row">
        {plants.map((plant) => (
          <div className="col" key={plant.id}>
            <PlantItem plant={plant} addToWishlist={addToWishlist} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantList;
