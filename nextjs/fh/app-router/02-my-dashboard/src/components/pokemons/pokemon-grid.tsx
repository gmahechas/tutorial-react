import { SimplePokemon } from '@/interfaces';
import PokemonCard from './pokemon-card';

interface Props {
  pokemons: SimplePokemon[];
}

export default function PokemonGrid({ pokemons }: Props) {
  return (
    <div>
      <span className='text-5xl my-2'>
        List of <small>statics</small> pokemons
      </span>
      <div className='flex flex-wrap gap-10 items-center justify-center'>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
