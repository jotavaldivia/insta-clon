import React from 'react'
import './navbar.css';


import LogoInstagram from '../../assets/images/logo_instagram.png'
import ImgProfile from '../../assets/images/profile.jpg'
import Icons from '../svg/Svg'; 



function navbar() {
  return (
    <>
     <nav className="navbar">
       <div className='navbar__container__logo'>
       <img className='navbar__logo' src={LogoInstagram}/>
       </div>
      <div className='navbar__input'>
      <Icons.SvgSearch/>
      <span className='navbar__input_text'>Buscar</span>
      </div>
      <div className='navbar__icons'>
      <Icons.SvgHome className='svgHome'/>
      <Icons.SvgDirect className='svgDirect'/>
      <Icons.SvgPost className='svgPost'/>
      <Icons.SvgBrujula className='svgBrujula'/>
      <Icons.SvgHeart className='svgHeart'/>
      <img className='navbar__profile' src={ImgProfile}/>
      </div>
     </nav>
    </>
  )
}

export default navbar