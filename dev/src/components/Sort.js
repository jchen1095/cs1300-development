import React from 'react';
import './Sort.css';

function Sort({ handleSort }) {
  return (
    <div className="sort-options">
      <label htmlFor="sort">Sort by Price:</label>
      <select id="sort" onChange={(e) => handleSort(e.target.value)}>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
}

export default Sort;
