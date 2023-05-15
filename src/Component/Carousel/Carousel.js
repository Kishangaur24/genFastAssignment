import React, { useState, useEffect } from 'react';
import style from "./Carousel.module.css"
//import { Carsouel } from './Const';

export default function Carousel() {
   const Carsouel = [
        {
          name: 'DCA',
          url: 'https://d6obr42qapdnt.cloudfront.net/banners/1681393366382_admin_40.png',
        },
        {
          name: 'ADCA',
          url: 'https://d6obr42qapdnt.cloudfront.net/banners/1681393328298_admin_38.png',
        },
        {
          name: 'Tally',
          url: 'https://d6obr42qapdnt.cloudfront.net/banners/1681393382390_admin_41.png',
        },
        {
          name: 'Tally',
          url: 'https://d6obr42qapdnt.cloudfront.net/banners/1681393314468_admin_37.png',
        },
      ];
  const [current, setCurrent] = useState(0);
  const length = Carsouel.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  console.log(current);

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <div className={style.main}>
        {Carsouel.map((item, index) => (
          <>
            <div key={index} className={style.box}>
              {index === current && <img className={style.img} src={item.url} />}
            </div>
          </>
        ))}
      </div>
      <div className={style.btnBox}>
        <button className={style.btn} onClick={prevSlide}>
          ⟪
        </button>
        <button className={style.btn} onClick={nextSlide}>
          ⟫
        </button>
      </div>
    </>
  );
}