// pages/index.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from '../components/PokemonList';

const Home = ({ pokemons }) => {
  return (
    <div>
      <h1>Liste des Pokémon</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
  const data = res.data.results;

  const pokemons = await Promise.all(data.map(async (pokemon, index) => {
    const pokemonRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`);
    return {
      id: index + 1,
      name: pokemon.name,
      image: pokemonRes.data.sprites.front_default
    };
  }));

  return {
    props: {
      pokemons
    }
  };
}

export default Home;
