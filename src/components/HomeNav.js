import React from "react";
import { Link } from "react-router-dom";
import { Link as Link2 } from "react-scroll";

function HomeNav() {
  return (
    <section className='nav'>
      <div className='nav-log-'>
        <button className='nav-log-btn'>
          <Link to='/logowanie' className='link-text btn-text'>
            Zaloguj
          </Link>
        </button>
        <button className='nav-create-account-btn'>
          <Link to='/rejestracja' className='link-text btn-text'>
            Załóż konto
          </Link>
        </button>
      </div>
      <div className='nav-menu'>
        <ul className='nav-menu-items'>
          <li>
            <Link to='/' className='link-text menu-text'>
              Start
            </Link>
          </li>
          <li>
            <Link2
              to='stepsSection'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className='menu-text'>
              O co chodzi?
            </Link2>
          </li>
          <li>
            <Link2
              to='aboutUsSection'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className='menu-text'>
              O nas
            </Link2>
          </li>
          <li>
            <Link2
              to='whoWeHelpSection'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className='menu-text'>
              Fundacja i organizacje
            </Link2>
          </li>
          <li>
            <Link2
              to='contactSection'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className='menu-text'>
              Kontakt
            </Link2>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HomeNav;
