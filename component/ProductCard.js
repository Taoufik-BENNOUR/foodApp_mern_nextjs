import Image from 'next/image'
import React from 'react'
import styles from "../styles/productCard.module.css"

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/images/pizza.jpg" width="500" height="500" alt="pizza"/>
      <h1 className={styles.title}>Di napoli</h1>
      <span className={styles.price}>10dt</span>
      <p className={styles.description}>lorem</p>
    </div>
  )
}

export default ProductCard