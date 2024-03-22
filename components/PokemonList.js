// components/PokemonList.js
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
