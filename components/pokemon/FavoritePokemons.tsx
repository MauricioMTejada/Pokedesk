import React, { FC } from 'react'
import { FavoriteCardPokemon } from './'

interface Props {
    favoritePokemon: number[]
}

export const FavoritePokemons: FC<Props> = ( {favoritePokemon} ) => {
  return (
    <div className="flex flex-row">{
        favoritePokemon.map(id => (
            <FavoriteCardPokemon id={id}/>
        ))
        }</div>
  )
}
