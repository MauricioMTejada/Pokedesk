import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@nextui-org/react'
import { Layout } from '../components/layouts'
import { pokeApi } from '../api'
import { PokemonListResponse, SmallPokemon } from '../interfaces'

interface Props {
    pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
	console.log(pokemons);
	return (
		<Layout title="Listado de Pókemons">
			<Button color="warning">Hola Mundo</Button>

			<ul>
				{
					pokemons.map( ({ id, name})  => (
						<li key={id}>
							#{id} - {name}
						</li>
					)
					)
				}
			</ul>
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
