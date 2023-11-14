import { useRouter } from "next/router"
import { GetStaticProps, GetStaticPaths, NextPage } from "next";

import { Layout } from "../../components/layouts";
import { pokeApi } from "../../api";
import { Pokemon } from "../../interfaces";
import { Card, CardBody, Image, CardFooter, CardHeader, Button } from "@nextui-org/react";

interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    // console.log(pokemon);

    return (
        <Layout title= "Algún Pókemon">
            <div className='grid grid-cols-6 gap-4'>
                <Card
                    isHoverable
                >
                    <CardBody>
                        <Image
                            src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                            alt={ pokemon.name}
                            width="100%"
                            height={ 200 }
                        />
                    </CardBody>
                </Card>
                <Card className="col-span-2">
                    <CardHeader className="flex justify-between">
                        <h1 className="text-3xl font-bold mb-4 capitalize">{pokemon.name}</h1>
                        <Button color="primary" variant="ghost">
                            Guardar en Favoritos
                        </Button>
                    </CardHeader>
                    <CardBody>
                        <div className="text-2xl">Sprites:</div>

                        <div className="flex flex-row">
                            <Image
                                src={ pokemon.sprites.front_default }
                                alt={ pokemon.name }
                                width={ 100 }
                                height={ 100 }
                            />
                            <Image
                                src={ pokemon.sprites.back_default }
                                alt={ pokemon.name }
                                width={ 100 }
                                height={ 100 }
                            />
                            <Image
                                src={ pokemon.sprites.front_shiny }
                                alt={ pokemon.name }
                                width={ 100 }
                                height={ 100 }
                            />
                            <Image
                                src={ pokemon.sprites.back_shiny }
                                alt={ pokemon.name }
                                width={ 100 }
                                height={ 100 }
                            />
                        </div>
                    </CardBody>
                </Card>
            </div>
        </ Layout>
    )

}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemon151 = [...Array(151)].map( ( value, index ) => `${ index+1  }`)
    console.log(pokemon151);


    return {
        paths: pokemon151.map( id => ( {
              params: {id}
        })),
        fallback: false,
    }

}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id:string}

    const { data }  = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

    return {
        props: {
            pokemon: data
        }
    }
}

export default PokemonPage;
