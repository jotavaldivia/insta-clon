import React from 'react'
import './Login.css'
import ImgLogin from '../../assets/images/login.jpg'
import Logo from '../../assets/images/logo_instagram.png'

function Login() {
  return (
    <div className='container_login'>
        <div className='container_login__backgroundImage'>
        <img className='container_login__img' src={ImgLogin}/>
        </div>
        <div className='container_login_form'>
            <img width="175" src={Logo }/>
            <div className='container_login_form__input'>
                <input placeholder='Teléfono, usuario o correo electrónico' />
                <input placeholder='Contraseña' />
                <a>Iniciar Sesion</a>
            </div>
            <div className='container_login_separator'>
              <hr className='container_login_separator--left' />
              <span className='container_login_separator--center'>o</span>
              <hr className='container_login_separator--rigth' />
            </div>
        </div>
    </div>
  )
}

export default Login