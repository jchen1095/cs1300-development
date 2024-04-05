import React, { useState } from 'react';
import './App.css';
import PlantList from './components/PlantList';
import Filters from './components/Filter';
import Aggregator from './components/Agg';
import Sort from './components/Sort';
import plantsData from './assets/plant-data';

function App() {
  const [plants, setPlants] = useState(plantsData);
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState(null); 

  // add plant to wishlist
  const addToWishlist = (plant) => {
    setWishlist([...wishlist, plant]);
  };

  // remove plant from wishlist
  const removeFromWishlist = (plantId) => {
    const index = wishlist.findIndex((plant) => plant.id === plantId);
    if (index !== -1) {
      const updatedWishlist = [...wishlist];
      updatedWishlist.splice(index, 1);
      setWishlist(updatedWishlist);
    }
  };

  //reset filters, make the default to show all plants
  const resetFilters = () => {
    setPlants(plantsData);
    document.getElementById('filter').value = 'all'; 
  };
  

  // handle sorting of plants by price
  const handleSort = (order) => {
    setSortOrder(order);
    const sortedPlants = [...plants].sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else if (order === 'desc') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
    setPlants(sortedPlants);
  };

  return (
    <div className="App">
      <h1>Garden Planning Tool</h1>
      <div className="container">
        <Filters setPlants={setPlants} resetFilters={resetFilters} />
        <Sort handleSort={handleSort} className="sort"/>
        <PlantList plants={plants} addToWishlist={addToWishlist} />
        <Aggregator wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
      </div>
    </div>
  );
}

export default App;
