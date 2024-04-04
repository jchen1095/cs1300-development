// Filter.js
import React from 'react';
import plantsData from '../assets/plant-data';


function Filters({ plants, setPlants, resetFilters }) {
  const handleFilter = (e) => {
    const category = e.target.value;
    if (category === 'all') {
      setPlants(plantsData);
    } else {
      const filteredPlants = plantsData.filter((plant) => plant.category === category);
      setPlants(filteredPlants);
    }
  };

  return (
    <div className="filters">
      <label htmlFor="filter" style={{ marginRight: '10px' }}>Filter:</label>
      <select id="filter" className="select-filter" onChange={handleFilter}>
        <option value="all">All</option>
        <option value="flower">Flowers</option>
        <option value="vegetable">Vegetables</option>
        <option value="fruit">Fruits</option>
      </select>
      <button onClick={resetFilters} style={{ marginLeft: '10px' }}>Reset Filtering and Sorting</button>
    </div>
  );
}

export default Filters;