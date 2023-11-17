import React, { useEffect, useState } from "react";

import localStoreFavorites from "../../utils/localStoreFavorites";
import { NoFavorites } from "../../components/ui";
import { Layout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";

const FavoritesPage = () => {
	const [favoritePokemon, setFavoritePokemon] = useState<number[]>([])

	useEffect(() => {
		setFavoritePokemon(localStoreFavorites.pokemons());
	}, [])


	return (
		<Layout title="Favoritos">
			{
				favoritePokemon.length === 0
				? <NoFavorites/>
				: <FavoritePokemons favoritePokemon={favoritePokemon}/>

			}
		</Layout>
	);
};

export default FavoritesPage;
