import Image from 'next/image'
import React from 'react'
import styles from "../styles/navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/images/phone.png" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDDER</div>
          <div className={styles.text}>2312313</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}>Berrries</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
        <Image  className={styles.cartImage} src="/images/shopping-cart.png" width="30px" height="30ppx" />
        <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar