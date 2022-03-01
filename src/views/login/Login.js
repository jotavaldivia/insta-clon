import React from "react";
import "./Login.css";
import ImgLogin from "../../assets/images/login.jpg";
import Logo from "../../assets/images/logo_instagram.png";
import Facebook from "../../assets/images/facebook.png";
import AppStore from "../../assets/images/appstore.png";
import GooglePlay from "../../assets/images/googleplay.png";

function Login() {
  return (
    <>
      <div className="container_login">
        <div className="container_login__backgroundImage">
          <img className="container_login__img" src={ImgLogin} />
        </div>
        <div className="container__order__elemnts">
          <div className="container_login_form">
            <img width="175" src={Logo} />
            <div className="container_login_form__input">
              <input placeholder="Teléfono, usuario o correo electrónico" />
              <input placeholder="Contraseña" />
              <a>Iniciar Sesion</a>
            </div>
            <div className="container_login_separator">
              <hr className="container_login_separator--left" />
              <span className="container_login_separator--center">o</span>
              <hr className="container_login_separator--rigth" />
            </div>

            <div className="container__loginWithFacebook">
              <img
                className="container__loginWithFacebook__logo"
                src={Facebook}
                width="15px"
              />
              <a className="container__loginWithFacebook__text">
                Iniciar Sesión con Facebook
              </a>
            </div>
            <p className="container_login__passText">
              ¿Haz olvidado la contraseña?
            </p>
          </div>
          <div className="container__acount">
            <p className="container_login__notAcountText">
              ¿No tienes una cuenta? <b>Registrate</b>
            </p>
          </div>

          <p>Descarga la aplicación.</p>

          <div className="container__order__elemnts__logos">  
           <img src={ AppStore} width="150px"></img>
           <img src={GooglePlay} width="150px"></img>
          </div>
        </div>
      </div>

      <div className="container__login__footer">
        <pre>
          Meta  Información  Blog  Empleo  Ayuda  API  Privacidad  Condiciones  Cuentas
          destacadas  Hashtags  Ubicaciones  Instagram Lite
        </pre>
        <pre>Danza Comida y bebida Hogar y jardinería Música Artes visuales</pre>
        <pre>Español (España) © 2022 Instagram from Meta</pre>
      </div>
    </>
  );
}

export default Login;
