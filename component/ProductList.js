import React from 'react'
import styles from "../styles/productList.module.css"
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Home food</h1>
        <p className={styles.description}>lorem</p>
        <div className={styles.wrapper}>
           <ProductCard  />
           <ProductCard  />
           <ProductCard  />
           <ProductCard  />
           <ProductCard  />
           <ProductCard  />
        </div>
    </div>
  )
}

export default ProductList