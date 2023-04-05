import React from 'react'
import logo from "../../Images/logo4.png";
import { FaUserAlt } from "react-icons/fa";
import {ReactNavbar} from "overlay-navbar"
const Navbar = () => {
  return (
    <div>
      <ReactNavbar
      navColor1="white"
      navColor2="black"
      burgerColor="orangered"
      burgerColorHover="orange"
      logo={logo}
      logoWidth="250px"
      logoHoverColor="hsl(250, 100%, 75%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1ColorHover="white"
      link1Color="orange"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="HSL(250, 100%, 75%)"
      profileIconColorHover="white"

      />
    </div>
  )
}

export default Navbar
