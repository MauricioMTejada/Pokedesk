import { FC } from 'react'

import { SmallPokemon } from '../../interfaces'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ( { pokemon: { id, name, img } }) => {
  return (
    <Card key={ id } isHoverable isPressable>
							<CardBody>
								<Image
									src={img ?? 'ruta'}
									alt='imagen Pokemon'
									width= { 140 }
								/>
							</CardBody>
							<CardFooter>
								<span>#{id} -&nbsp;</span><span className='text-transform: capitalize'>{name}</span>
							</CardFooter>
						</Card>
  )
}
