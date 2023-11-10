import Head from "next/head"
import { FC, ReactNode } from "react";
import { Navbar } from "../ui";

interface LayoutProps {
    title?: string;
    children: ReactNode;
  }

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="Mauricio Tejada" />
            <meta name="description" content={`Información sobre el pokémon ${ title }`} />
            <meta name="keywords" content={`${ title }, pokemon, pokedex`} />

        </Head>

        <Navbar/>

        <main style={{ padding:'0px 20px'}}>
            { children }
        </main>
    </>
  )
}
