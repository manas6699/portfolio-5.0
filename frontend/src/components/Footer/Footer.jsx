import React from 'react'
import "./Footer.css"
import {FaFacebookF} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

const Footer = () => {
  return (
    <div className='footer'>
      Made with ❤️ by Manas Baroi

      <div className="socials">
        <FaFacebookF/>
        <BsGithub/>
        <BsInstagram/>
        <BsTwitter/>
        <BsLinkedin/>
      </div>
      
    </div>
  )
}

export default Footer
