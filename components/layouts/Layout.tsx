import Head from "next/head"
import { FC, ReactNode } from "react";
import { Navbar } from "../ui";
import { useRouter } from "next/router";

interface LayoutProps {
    title?: string;
    children: ReactNode;
  }

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title }) => {

  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="Mauricio Tejada" />
            <meta name="description" content={`Información sobre el pokémon ${ title }`} />
            <meta name="keywords" content={`${ title }, pokemon, pokedex`} />

            <meta property="og:title" content={`Información sobre ${title}`}  />
            <meta property="og:description" content={`Ésta es la página sobre ${title}`} />
            <meta property="og:image" content={`${origin}/images/Banner_pokemon.png`} />

        </Head>

        <Navbar/>

        <main style={{ padding:'0px 20px'}}>
            { children }
        </main>
    </>
  )
}
