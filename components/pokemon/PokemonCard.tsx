import { FC } from 'react'

import { SmallPokemon } from '../../interfaces'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { useRouter } from 'next/router'

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ( { pokemon: { id, name, img } }) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/pokemon/${id}`)
    }

  return (
    <Card
        key={ id }
        isHoverable
        isPressable
        onClick={ onClick }
    >
        <CardBody>
            <Image src={img ?? 'ruta'} alt='imagen Pokemon' width= { 140 } />
        </CardBody>
        <CardFooter>
            <span>#{id} -&nbsp;</span><span className='text-transform: capitalize'>{name}</span>
        </CardFooter>
    </Card>
  )
}
