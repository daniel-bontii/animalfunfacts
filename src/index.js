import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function displayFact(e){
  const animalName = e.target.alt;
  const info = animals[animalName];
  const randFactIndex = Math.floor(Math.random() * info.facts.length);
  const randFact = info.facts[randFactIndex];
  document.getElementById('fact').innerHTML = randFact;
}
const title = '';
const background = <img className="background" alt="ocean" src="/images/ocean.jpg" />;
const showBackground = true;
const images = [];
for(const animal in animals){
  images.push(
    <img
      onClick = {displayFact}
      key = {animal}
      className = "animal"
      alt = {animal}
      src = {animals[animal].image}
      aria-label = {animal}
      role = "button"
    />
  );
}

const animalFacts = (
  <div>
    <p id="fact"></p>
    <h1>{title ||'Click an animal for a fun fact!'}</h1>
    {showBackground && background}
      <div className="animals">
        {images}
      </div>
    </div>
  );

ReactDOM.render(
  animalFacts, 
  document.getElementById('root')
); 