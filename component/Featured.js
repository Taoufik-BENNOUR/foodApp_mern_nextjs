import Image from 'next/image'
import React, { useState } from 'react'
import styles from "../styles/featured.module.css"

const Featured = () => {
    const [index, setindex] = useState(0)
    const images = [
        "/images/pizza.jpg",
        "/images/phone.png",
        "/images/pizzaveg.jpg",
    ]
    const handleArrow = (direction) =>{
        if(direction==="l"){
            setindex(index === 0 ? images.length-1: index-1)
        }
        if(direction==="r"){
            setindex(index === images.length-1 ?0 : index+1 )
        }
    }
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/images/leftarrow.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/images/rightarrow.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  )
}

export default Featured