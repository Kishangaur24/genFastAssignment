import React from 'react'
import style from "./Deals.module.css"
const Deals = () => {
  return (
    <div>
    
      <div className={style.card}>
        <img src="https://d190yilpfqp8f7.cloudfront.net/1677069343095_6.png"/>
        <div className={style.cardDetail}>
            <h2>LACTOPEN DS TABLETS</h2>
            <p>Lactobacillus 120 Million Spores</p>
            <p>Company:Dr Morepen</p>
            <p>Packing Size:Strip Of 10 Tablets</p>
            <p>Expiry:05/2024</p>
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  )
}

export default Deals
