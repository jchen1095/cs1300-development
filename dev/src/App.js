// App.js
import React, { useState } from 'react';
import './App.css';
import PlantList from './components/PlantList';
import Filters from './components/Filter';
import Aggregator from './components/Agg';
import plantsData from './assets/plant-data';

function App() {
  const [plants, setPlants] = useState(plantsData);
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (plant) => {
    setWishlist([...wishlist, plant]);
  };

  const removeFromWishlist = (plantId) => {
    const indexToRemove = wishlist.findIndex((plant) => plant.id === plantId);
    if (indexToRemove !== -1) {
      const updatedWishlist = [...wishlist];
      updatedWishlist.splice(indexToRemove, 1);
      setWishlist(updatedWishlist);
    }
  };

  const resetFilters = () => {
    setPlants(plantsData);
  };

  return (
    <div className="App">
      <h1>Garden Planning Tool & Plant Shop</h1>
      <div className="container">
        <Filters plants={plants} setPlants={setPlants} resetFilters={resetFilters} />
        <PlantList plants={plants} addToWishlist={addToWishlist} />
        <Aggregator wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
      </div>
    </div>
  );
}

export default App;
