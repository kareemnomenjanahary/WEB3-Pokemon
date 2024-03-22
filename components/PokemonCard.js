// components/PokemonCard.js
import Link from 'next/link';

const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.image} alt={pokemon.name} />
      <Link href={`/${pokemon.id}`}>
        <a>Détails</a>
      </Link>
    </div>
  );
};

export default PokemonCard;
