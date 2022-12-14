import styles from './MainLayout.module.css'
import {NavBar} from '../NavBar'
import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

export const MainLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar/>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

