import React, { useEffect, useState } from "react";

import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import localStoreFavorites from "../../utils/localStoreFavorites";
import { Card, Image } from "@nextui-org/react";

const FavoritesPage = () => {
	const [favoritePokemon, setFavoritePokemon] = useState<number[]>([])

	useEffect(() => {
		setFavoritePokemon(localStoreFavorites.pokemons());
	}, [])


	return (
		<Layout title="Favoritos">
			{
				favoritePokemon.length === 0
				? (<NoFavorites/>)
				: (<div className="flex flex-row">{
					favoritePokemon.map(id=> (
						<div className="p-4">
							<Card isHoverable isPressable className="p-3">
								<Image
									src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
									alt={`Favorite Pokemon ${id}`}
									width={140}
									height={140}
								/>
							</Card>
						</div>
					))
					}</div>)

			}
		</Layout>
	);
};

export default FavoritesPage;
