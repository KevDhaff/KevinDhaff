import React from "react";
import PokemonCard from "./PokemonCard";

const Pokedex = ({ pokemonList }) => {
  return (
    <div className="pokedex">
      <h2>Pokedex</h2>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;