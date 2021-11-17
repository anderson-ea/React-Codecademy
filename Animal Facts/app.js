import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';
const images = [];
const background = <img class='background' alt='ocean' src='/images/ocean.jpg' />
const showBackground = true;

for (const animal in animals) {
  images.push(
    <img 
      key={animal} 
      className='animal' 
      alt={animal} 
      src={animals[animal].image} 
      aria-label={animal} 
      role='button'
      onClick={displayFact}
    />
  )
};

function displayFact(e) {
  const animalFax = animals[e.target.alt].facts;
  const optionIndex = Math.floor(Math.random() * animalFax.length);
  document.getElementById('fact').innerHTML = animalFax[optionIndex];
}

const animalFacts = (
  <div>
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    {showBackground && background}
    <div className='animals'>{images}</div> 
    <p id='fact'></p>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));