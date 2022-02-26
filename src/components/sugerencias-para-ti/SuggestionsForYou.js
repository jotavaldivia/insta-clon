import React from "react";
import "./SuggestionsForYou.css";
import IconProfile from "../icon_profile/IconProfile";

function SuggestionsForYou() {
  return (
    <>
      <div className="section__suggestions">
        <IconProfile className="section__suggestions__iconPorfile histories_circule--black" />
        <div className="section__suggestions__suggestionsForYou">
          <p>jota_valdebenito</p>
          <span>Juan Valdebenito Valdivia</span>
        </div>

        <a className="section__suggestions__bottom">Cambiar</a>

        <div className="section__forYou">
          <div className="section__forYou__all">
            <span>Sugerencias para ti</span>
            <a>Ver Todo</a>
          </div>
        </div>
        <IconProfile className="section__suggestions__iconPorfile histories_circule--black" />
        <div className="section__suggestions__suggestionsForYou">
          <p>jota_valdebenito</p>
          <span>Sugerencia para ti</span>
        </div>

        <a className="section__suggestions__bottom">Seguir</a>

        <IconProfile className="section__suggestions__iconPorfile histories_circule--black" />
        <div className="section__suggestions__suggestionsForYou">
          <p>jota_valdebenito</p>
          <span>Sugerencia para ti</span>
        </div>

        <a className="section__suggestions__bottom">Seguir</a>

        <IconProfile className="section__suggestions__iconPorfile histories_circule--black" />
        <div className="section__suggestions__suggestionsForYou">
          <p>jota_valdebenito</p>
          <span>Sugerencia para ti</span>
        </div>

        <a className="section__suggestions__bottom">Seguir</a>

        <IconProfile className="section__suggestions__iconPorfile histories_circule--black" />
        <div className="section__suggestions__suggestionsForYou">
          <p>jota_valdebenito</p>
          <span>Sugerencia para ti</span>
        </div>

        <a className="section__suggestions__bottom">Seguir</a>

      </div>
    </>
  );
}

export default SuggestionsForYou;
