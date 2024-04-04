import React from 'react';
import Rose from '../assets/Rose.jpg';
import Tomato from '../assets/Tomato.jpg';
import Eggplant from '../assets/Eggplant.jpg';
import Orange from '../assets/Orange.jpg';
import Daisy from '../assets/Daisy.jpg';
import Lime from '../assets/Lime.jpg';
import Cucumber from '../assets/Cucumber.jpg';
import Cilantro from '../assets/Cilantro.jpg';
import Carnation from '../assets/Carnation.jpg';
import Apple from '../assets/Apple.jpg';
import Lettuce from '../assets/Lettuce.jpg';
import Onion from '../assets/Onion.jpg';
import './PlantItem.css';

function PlantItem({ plant, addToWishlist }) {
  const { id, name, category, price } = plant;
  let imageSrc;
  switch (name) {
    case 'Rose':
      imageSrc = Rose;
      break;
    case 'Tomato':
      imageSrc = Tomato;
      break;
    case 'Eggplant':
      imageSrc = Eggplant;
      break;
    case 'Orange':
      imageSrc = Orange;
      break;
    case 'Daisy':
      imageSrc = Daisy;
      break;
    case 'Lime':
      imageSrc = Lime;
      break;
    case 'Cucumber':
      imageSrc = Cucumber;
      break;
    case 'Cilantro':
      imageSrc = Cilantro;
      break;
    case 'Carnation':
      imageSrc = Carnation;
      break;
    case 'Apple':
      imageSrc = Apple;
      break;
    case 'Lettuce':
      imageSrc = Lettuce;
      break;
    case 'Onion':
      imageSrc = Onion;
      break;
    default:
      imageSrc = '';
      break;
  }

  return (
    <div className="plant-item">
      <img src={imageSrc} alt={name} style={{ width: '40%', height: 'auto' }}/>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <button className="wishlist-button" onClick={() => addToWishlist(plant)}>Add to Wishlist</button>
    </div>
  );
}

export default PlantItem;
