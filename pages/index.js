import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Featured from '../component/Featured'
import ProductList from '../component/ProductList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nice</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <ProductList />
    </div>
  )
}