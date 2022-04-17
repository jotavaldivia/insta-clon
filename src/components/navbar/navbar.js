import React from 'react'
// import {Link} from "react-router-dom";
import './navbar.css';


import LogoInstagram from '../../assets/images/logo_instagram.png'
import ImgProfile from '../../assets/images/profile.jpg'
import {SvgHome,SvgSearch,SvgDirect,SvgPost,SvgBrujula,SvgHeart} from '../svg/Svg'; 



function navbar() {
  return (
    <>
     
     <nav className="navbar">
       <div className='navbar__container__logo'>
       <img className='navbar__logo' src={LogoInstagram} alt="description of imagee"/>
       </div>
      <div className='navbar__input'>
      <SvgSearch/>
      <span className='navbar__input_text'>Buscar</span>
      </div>
      <div className='navbar__icons'>
      <SvgHome className='svgHome'/>
      <SvgDirect className='svgDirect'/>
      <SvgPost className='svgPost'/>
      <SvgBrujula className='svgBrujula'/>
      <SvgHeart className='svgHeart'/>
      <img className='navbar__profile' src={ImgProfile} alt="description of imagee"/>
      </div>
     </nav>
    </>
  )
}

export default navbar