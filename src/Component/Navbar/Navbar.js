import React from 'react'
import style from "./Navbar.module.css"
import { BsCartDash } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
const Navbar = () => {
  return (
    <div className={style.main}>
      <div className={style.logo}>
        <img src="https://genifast.in/static/media/logo.a1bb9086dedf92a99e2b.png"/>
        <div className={style.select}>
        <select >
            <option value="Hyderabad">Hyderabad</option>
            <option value="wareHouse">wareHouse</option>
            
        </select>
        <input type='search' placeholder='Search Product by generic name'/>
        </div>
        <div className={style.icons}>
           <FiHeart/> 
          <BsCartDash/>
          <AiOutlineUser/>
        </div>
      </div>
      <div className={style.Secondheader}>
        <div className={style.option}>
        <h2>Home</h2>
        <h2></h2>
        <h2>Shop by Category</h2>
        <h2>About us</h2>
        <h2>Contact</h2>
        <h2>blog</h2>
        </div>
        <div>Need help? 8886-6602-01</div>
      </div>
    </div>
  )
}

export default Navbar
