import Image from 'next/image';
import { PokemonsResponse, SimplePokemon } from './interfaces';

const getPokemons = async (
  limit = 100,
  offset = 0
): Promise<SimplePokemon[]> => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const response = await fetch(url);
  const data: PokemonsResponse = await response.json();


  return data.results.map(({ url, name }) => ({
    id: url.split('/').at(-2)!,
    name,
  }));
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons();
  return (
    <div className='flex flex-col'>
      <div className='flex flex-wrap gap-10 items-center justify-center'>
        {pokemons.map(({ id, name }) => (
          <Image
            key={id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={100}
            height={100}
            alt={name}
          />
        ))}
      </div>
    </div>
  );
}
