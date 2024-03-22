// pages/[id].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(res.data);
    };

    if (id) {
      fetchPokemon();
    }
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Taille: {pokemon.height}</p>
      <p>Poids: {pokemon.weight}</p>
      <p>Types: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      <p>Numéro: {pokemon.order}</p>
    </div>
  );
};

export default PokemonDetails;
