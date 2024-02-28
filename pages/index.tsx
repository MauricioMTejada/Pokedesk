import type { GetStaticProps, NextPage } from 'next'

import { Layout } from '../components/layouts'
import { pokeApi } from '../api'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { PokemonCard } from '../components/pokemon'

interface Props {
    pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
	return (
		<Layout title="Pokedex">

			<div className='grid grid-cols-6 gap-4'>
				{ pokemons.map(  (pokemon) => ( <PokemonCard  key={pokemon.id} pokemon={pokemon} /> ) ) }
			</div>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {

    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

    const obtenerIdDesdeUrl = (url: string) => {
        const match = url.match(/\/(\d+)\/$/);
        return match ? parseInt(match[1], 10) : null;
      };

    const pokemons: SmallPokemon[] = data.results.map((element) => {
      const id = obtenerIdDesdeUrl(element.url);
      return {
        ...element,
        id: id,
        img: id
          ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
          : null,
      };
    })


    return {
      props: {
          pokemons
      }
    }
}

export default HomePage
