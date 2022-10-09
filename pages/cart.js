import React from 'react'
import styles from "../styles/cart.module.css"
import Image from 'next/image'

const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <table className={styles.table}>
          <thead>
           <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
            <tbody>
            <tr className={styles.tr}>
               <td  className={styles.imgContainer}>
                <Image src="/images/pizza.jpg" layout='fill' objectFit='cover'/>
                </td>
              <td><span className={styles.name}>RockNroll</span></td>
              <td><span className={styles.extras}>Double cheese</span></td>
              <td><span className={styles.price}>$15</span></td>
              <td><span className={styles.quantity}>1</span></td>
              <td><span className={styles.total}>$15</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Subtotal</b>$15
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Discount</b>$2
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total</b>$13
            </div>
            <button className={styles.button}>Checkout</button>
          </div>
        </div>
    </div>
  )
}

export default Cart