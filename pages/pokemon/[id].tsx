import { useRouter } from "next/router"
import { GetStaticProps, GetStaticPaths, NextPage } from "next";

import { Layout } from "../../components/layouts";

interface Props {
    id: string;
    name: string;
}

const PokemonPage: NextPage<Props> = ({ id, name }) => {
    const router = useRouter();
    console.log(router.query);

    return (
        <Layout title= "Algún Pókemon">
            <h1>{id} - {name}</h1>
        </ Layout>
    )

}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
        ],
        fallback: false,
    }

}

export const getStaticProps: GetStaticProps = async (ctx) => {

    return {
        props: {
            id: 1,
            name: "bulbasaur"
        }
    }
}

export default PokemonPage;