import React from "react";
import { Link } from "react-router-dom";

function HomeNav() {
  return (
    <section className='nav'>
      <div className='nav-log-'>
        <button className='nav-log-button'>
          <Link to='/logowanie'>Zaloguj</Link>
        </button>
        <button className='nav-create-account-btn'>
          <Link to='/rejestracja'>Załóż konto</Link>
        </button>
      </div>
      <div className='nav-menu'>
        <ul className='nav-menu-items'>
          <li>
            <Link to='/'>Start</Link>
          </li>
          <li>O co chodzi?</li>
          <li>O nas</li>
          <li>Fundacja i organizacje</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </section>
  );
}

export default HomeNav;
