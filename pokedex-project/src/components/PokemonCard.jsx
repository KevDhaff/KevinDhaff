import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [speciesData, setSpeciesData] = useState(null);

  useEffect(() => {
    async function fetchPokemonDetails() {
      try {

        const speciesResponse = await axios.get(pokemon.pokemon_species.url);
        const speciesData = speciesResponse.data;
        setSpeciesData(speciesData);

        const pokemonDetailResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${speciesData.id}`);
        setPokemonData(pokemonDetailResponse.data);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    }
    fetchPokemonDetails();
  }, [pokemon]);

  if (!pokemonData || !speciesData) {
    return <p>Loading...</p>;
  }

  const backgroundColor = speciesData.color.name || "#fff";
debugger;
  return (
    <div className="pokemon-card" style={{ backgroundColor }}>
      {}
      <img
        src={pokemonData.sprites.other["official-artwork"].front_default}
        alt={pokemonData.name}
        className="pokemon-image"
      />
      <h3>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h3>
      <p>ID: {pokemonData.id}</p>
      <p>Type: {pokemonData.types[0].type.name.charAt(0).toUpperCase() + pokemonData.types[0].type.name.slice(1)}</p>
    </div>
  );
};

export default PokemonCard;