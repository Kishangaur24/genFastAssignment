import React from 'react'
import style from "./Footer.module.css"
import {FaFacebookF} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.logo}>
        <img src='https://genifast.in/static/media/logo.a1bb9086dedf92a99e2b.png'/>
        <p>#105, Plot No A-1, GBS Enclave,
          Moti Valley, Trimulgherry,
              Secunderabad - 500015
               Hyderabad, Telangana, India</p>
               <h4><FaFacebookF/><BsInstagram/></h4>
      </div>
      <div>
        <h1>Need help</h1>
        <h2>8886-6602-01</h2>
        <p>Monday – Friday: 9:00-20:00</p>
        <p>Saturday: 11:00 – 15:00</p>
        <h2>info@genifast.in</h2>
      </div>
      <div className={style.information}>
        <h1>Information</h1>
        <li>About us</li>
        <li>Shipping Policy</li>
        <li>Privacy Policy</li>
        <li>Return Policy</li>
        <li>Terms and conditions</li>
      </div>
      <div className={style.account}>
        <h1>Account</h1>
        <li>MyAccount</li>
        <li>My Orders</li>
        <li>Wishlist</li>
      </div>
    </div>
  )
}

export default Footer
