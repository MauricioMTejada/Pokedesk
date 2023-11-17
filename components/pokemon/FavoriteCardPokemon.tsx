import React, { FC } from "react";

import { useRouter } from "next/router";

import { Card, Image } from "@nextui-org/react";

interface Props {
	id: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ id }) => {

	const router = useRouter();

	const onFavoriteClicked = () => {
		router.push(`/pokemon/${id}`)
	};

	return (
		<div className="p-4" key={id}>
			<Card isHoverable isPressable onClick={onFavoriteClicked} className="p-3">
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
					alt={`Favorite Pokemon ${id}`}
					width={140}
					height={140}
				/>
			</Card>
		</div>
	);
};
