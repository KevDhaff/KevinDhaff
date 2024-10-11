import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokedex from "./components/Pokedex";
import RegionSelector from "./components/RegionSelector"
import './App.css'

function App() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [regions, setRegions] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchRegions() {
      try {
        const regionResponse = await axios.get("https://pokeapi.co/api/v2/region/");
        setRegions(regionResponse.data.results);
        setSelectedRegion(regionResponse.data.results[0].name);
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    }
    fetchRegions();
  }, []);

  useEffect(() => {
    if (selectedRegion) {
      async function fetchPokemonData() {
        try {
          const regionResponse = await axios.get(`https://pokeapi.co/api/v2/region/${selectedRegion}`);
          const pokedexUrl = regionResponse.data.pokedexes[0].url;
          const pokedexResponse = await axios.get(pokedexUrl);
          const pokemonEntries = pokedexResponse.data.pokemon_entries;
          setPokemonList(pokemonEntries);
        } catch (error) {
          console.error("Error fetching Pokémon data:", error);
        }
      }
      fetchPokemonData();
    }
  }, [selectedRegion]);

  return (
    <div className="App">
      <h1>React PokeDex</h1>
      <RegionSelector regions={regions} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      <Pokedex pokemonList={pokemonList} />
    </div>
  );
}

export default App;