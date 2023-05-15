import React from 'react'
import style from "./Card.module.css"
function Card() {
     const Card = [
        {
          name: 'Urology',
          url: 'https://d6obr42qapdnt.cloudfront.net/categories/1672146169469_42.png',
        },
        {
          name: 'Antibiotic',
          url: 'https://d6obr42qapdnt.cloudfront.net/categories/1672145800129_31.png',
        },
        {
          name: 'Cardiac',
          url: 'https://d6obr42qapdnt.cloudfront.net/categories/1672145872677_32.png',
        },
        {
          name: 'Gyneocology',
          url: 'https://d6obr42qapdnt.cloudfront.net/categories/1672145946261_33.png',
        },
        {
          name: 'Eye/Ear Drops',
          url: 'https://d6obr42qapdnt.cloudfront.net/categories/1672145928913_34.png',
        },
      
      ];

  return (
    <>
   
    <div className={style.mainCard}>
    <h1 className={style.cardHeading}>Checkout the most popular categories</h1>
      {
        Card.map((item)=>{
            return(
                <div className={style.card}>
                <img src={item.url}/>
                <h2>{item.name}</h2>
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default Card
