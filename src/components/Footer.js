import React from 'react'
import Logo from "../imgaes/logo.png"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <img  className="footerlogo"src={Logo} alt=''/>
      <span> <b> Made with ❤️ and   React.js</b></span>
    </footer>
   
  )
}

export default Footer