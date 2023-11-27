import React, { FC } from 'react'
import { FavoriteCardPokemon } from './'

interface Props {
    favoritePokemon: number[]
}

export const FavoritePokemons: FC<Props> = ( {favoritePokemon} ) => {
  return (
    <div className="flex flex-row justify-center flex-wrap">{
        favoritePokemon.map(id => (
            <FavoriteCardPokemon key={id} id={id}/>
        ))
        }</div>
  )
}
