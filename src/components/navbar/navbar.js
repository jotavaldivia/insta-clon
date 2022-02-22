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
      <Icons.SvgHome/>
      <Icons.SvgDirect/>
      <Icons.SvgPost/>
      <Icons.SvgBrujula/>
      <Icons.SvgHeart/>
      <img className='navbar__profile' src={ImgProfile}/>
      </div>
     </nav>
    </>
  )
}

export default navbar