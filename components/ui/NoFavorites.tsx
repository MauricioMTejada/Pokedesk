    import Image from 'next/image'
import React from 'react'

    export const NoFavorites = () => {
      return (
        <div className='flex flex-col h-(100vh-100px) items-center justify-center self-center'>
            <span>No hay Favoritos</span>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                alt='shadow image'
                width={250}
                height={250}
                style={{opacity: 0.1}}
            />
        </div>
      )
    }
