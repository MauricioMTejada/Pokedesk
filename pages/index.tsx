import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@nextui-org/react'
import { Layout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <Layout  title='Listado de Pókemons'>
      <Button color='warning'>
		    Hola Mundo
      </Button>
    </Layout>
  )
}

export default HomePage
