import React from "react";
import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <section className='home-header'>
      <div className='home-header-picture'></div>
      <div className='home-header-start'>
        <p>
          Zacznij pomagać!
          <br />
          Oddaj niechciane rzeczy w zaufane ręce
        </p>
        <div className='decoration'></div>
        <div className='home-header-btns'>
          <button className='hand-over-btn'>
            <Link to='/logowanie' className='link-text header-btns-text'>
              ODDAJ <br /> RZECZY
            </Link>
          </button>
          <button className='collection-btn'>
            <Link to='/logowanie' className='link-text header-btns-text'>
              ZORGANIZUJ ZBIÓRKĘ
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeHeader;
