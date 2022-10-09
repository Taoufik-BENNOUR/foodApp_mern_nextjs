import Image from 'next/image'
import React from 'react'
import styles from "../styles/footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <Image src="/images/pizza.jpg" layout='fill' alt="pizza" objectFit='cover'/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>BEST PIIZA SLICE</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
          <p className={styles.text}>
            Street 5th av
            <br/>NewYork ,85022
            <br/> 553 333 563
          </p>
          <p className={styles.text}>
            Street 5th av
            <br/>NewYork ,85022
            <br/> 553 333 563
          </p>
          <p className={styles.text}>
            Street 5th av
            <br/>NewYork ,85022
            <br/> 553 333 563
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working</h1>
          <p className={styles.text}>
            We work 24/7
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer