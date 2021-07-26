import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Error.css'
export default class componentName extends Component {
  render() {
    return (
      <div className="errorT">
          <a>
  <header className="top-header">
</header>


<div>
  <div className="starsec"></div>
  <div className="starthird"></div>
  <div className="starfourth"></div>
  <div className="starfifth"></div>
</div>



<div className="lamp__wrap">
  <div className="lamp">
    <div className="cable"></div>
    <div className="cover"></div>
    <div className="in-cover">
      <div className="bulb"></div>
    </div>
    <div className="light"></div>
  </div>
</div>

<section className="error">
  
  <div className="error__content">
    <div className="error__message message">
      <h1 className="message__title">Sahifa topilmadi</h1>
      <p className="message__text">Kechirasiz, siz izlagan sahifa bu erda topilmadi. Siz havola buzilgan bo'lishi mumkin yoki endi mavjud emas. Iltimos, qayta urinib ko'ring yoki biznikiga qarang.</p>
    </div>
    <div className="error__nav e-nav">
      <a className="e-nav__link"><Link to="/uz">Bosh sahifaga qaytish</Link></a>
    </div>
  </div>
  

</section>

  </a>
      </div>
    );
  }
}
