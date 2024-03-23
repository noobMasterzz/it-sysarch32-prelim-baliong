// Pokemon.jsx
import React from 'react';

const Pokemon = ({ pokemon, language }) => {
  return (
    <div className='pokemon-container'> 
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name.english} />
      <h2>{pokemon.id} {pokemon.name[language]}</h2> 
    </div>
</div>
  );
};

export default Pokemon;