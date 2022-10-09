import Image from 'next/image'
import React, { useState } from 'react'
import styles from "../../styles/product.module.css"

const Product = () => {
    const [size, setsize] = useState(0)
    const pizza = {
        id:1,
        name:"RockN",
        price:[19,23,27],
        img:"/images/pizza.jpg",
        desc:"this is good pizza that contains"
    }
    // const handlePrice = (price)=>{
    //     price === "s" ? setsize(0):price==="m"?setsize(1):setsize(2)
    // }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} layout="fill" objectFit='contain'/>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>${pizza.price[size]}</span>
            <p className={styles.dec}>{pizza.desc}</p>
            <h3 className={styles.choose}>Choose the size</h3>
           <div className={styles.sizes}>
            <div className={styles.size} onClick={()=>setsize(0)}>
                <Image src="/images/pizzaSize.jpg" layout='fill'/>
                <span className={styles.sizeDesc}>Small</span>
            </div>
            <div className={styles.size} onClick={()=>setsize(1)} >
                <Image src="/images/pizzaSize.jpg" layout='fill'/>
                <span className={styles.sizeDesc}>Medium</span>
            </div>
            <div className={styles.size}>
                <Image src="/images/pizzaSize.jpg" layout='fill' onClick={()=>setsize(2)}/>
                <span className={styles.sizeDesc}>Large</span>
            </div>
           </div>
           <h3 className={styles.choose}>Choose additional ingredients</h3>
            <div className={styles.ingredients}>
            <div className={styles.option}>
                <input type="checkbox" id="double" name='double' className={styles.checkbox} />
                <label htmlFor="double">Double</label>
            </div>
            <div className={styles.option}>
                <input type="checkbox" id="cheese" name='cheese' className={styles.checkbox} />
                <label htmlFor="cheese">Cheese</label>
            </div>
            <div className={styles.option}>
                <input type="checkbox" id="BBQ" name='BBQ' className={styles.checkbox} />
                <label htmlFor="BBQ">BBQ</label>
            </div>
            </div>
            <div className={styles.add}>
                <input type="number" default={1} className={styles.quantity} />
                <button className={styles.button}>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product