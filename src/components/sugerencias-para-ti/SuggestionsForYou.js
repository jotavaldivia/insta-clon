import React from "react";
import "./SuggestionsForYou.css";
import IconProfile from "../icon_profile/IconProfile";
import Footer from "../footer/Footer";

function SuggestionsForYou() {
  return (
    <>
      <div className="section__suggestions">
        <IconProfile/>
        <div className="section__suggestions__suggestionsForYou">
          <p>jota_valdebenito</p>
          <span>Juan Valdebenito Valdivia</span>
        </div>

        <a className="section__suggestions__bottom">Cambiar</a>

        <div className="section__forYou">
          <div className="section__forYou__all">
            <span>Nuevo en Instagram</span>
            <a>Ver Todo</a>
          </div>
        </div>
        <IconProfile/>
        <div className="section__suggestions__suggestionsForYou">
          <p>jota_valdebenito</p>
          <span>Nuevo en Instagram</span>
        </div>

        <a className="section__suggestions__bottom">Seguir</a>

        <IconProfile/>
        <div className="section__suggestions__suggestionsForYou">
          <p>jota_valdebenito</p>
          <span>Nuevo en Instagram</span>
        </div>

        <a className="section__suggestions__bottom">Seguir</a>

        <IconProfile />
        <div className="section__suggestions__suggestionsForYou">
          <p>jota_valdebenito</p>
          <span>Nuevo en Instagram</span>
        </div>

        <a className="section__suggestions__bottom">Seguir</a>

        <IconProfile />
        <div className="section__suggestions__suggestionsForYou">
          <p>jota_valdebenito</p>
          <span>Nuevo en Instagram</span>
        </div>

        <a className="section__suggestions__bottom">Seguir</a>

        <div className="section__suggestions_Footer">
        <Footer/>
        </div>

      </div>
    </>
  );
}

export default SuggestionsForYou;
