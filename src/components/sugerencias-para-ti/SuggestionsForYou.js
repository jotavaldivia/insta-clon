import React from 'react'
import './SuggestionsForYou.css';
import IconProfile from '../icon_profile/IconProfile';

function SuggestionsForYou() {
  return (
    <>
    <div className='section__suggestions'>
        <IconProfile colorFondo={"#dfdfdf"} className="section__suggestions__iconPorfile histories_circule--black"  />
        <div className='section__suggestions__suggestionsForYou'>
          <p>jota_valdebenito</p>
          <span>Juan Valdebenito Valdivia</span>
        </div>

        <a className='section__suggestions__bottom'>
      Cambiar
        </a>
    </div>
    </>
  )
}

export default SuggestionsForYou