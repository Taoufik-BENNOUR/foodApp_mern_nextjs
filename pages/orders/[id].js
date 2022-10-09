import React from 'react'
import styles from "../../styles/order.module.css"
import Image from 'next/image'
const Order = () => {

    const status = 0
    const statusClass = (index)=>{
        if(index-status<1) return styles.done
        if(index-status===1) return styles.inProgress
        if(index-status>1) return styles.undone
    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <table className={styles.table}>
          <thead>
           <tr className={styles.trTitle}>
              <th>Order Id</th>
              <th>Cutomer</th>
              <th>Address</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
            <tbody>
            <tr className={styles.tr}>
              <td><span className={styles.id}>143125</span></td>
              <td><span className={styles.name}>My name</span></td>
              <td><span className={styles.extras}>User Adress</span></td>
              <td><span className={styles.price}>$15</span></td>
              <td><span className={styles.quantity}>1</span></td>
              <td><span className={styles.total}>$15</span></td>
              </tr>
            </tbody>
          </table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src="" width={30} height={30} alt="" />
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                        <Image src="/images/checked.jpg" width={20} height={20} alt="" />
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src="" width={30} height={30} alt="" />
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                        <Image src="/images/checked.jpg" width={20} height={20} alt="" />
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src="" width={30} height={30} alt="" />
                    <span>On the way</span>
                    <div className={styles.checkedIcon}>
                        <Image src="/images/checked.jpg" width={20} height={20} alt="" />
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src="" width={30} height={30} alt="" />
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                        <Image src="/images/checked.jpg" width={20} height={20} alt="" />
                    </div>
                </div>
            </div>
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
            <button disabled className={styles.button}>Pay</button>
          </div>
        </div>        
    </div>
  )
}

export default Order