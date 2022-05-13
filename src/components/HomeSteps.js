import React from "react";
import { Link } from "react-router-dom";

function HomeSteps() {
  return (
    <section className='steps' id='stepsSection'>
      <p className='steps-title'>Wystarczą 4 poste kroki</p>
      <div className='decoration'></div>
      <div className='steps-explain'>
        <div className='steps-explain-item steps-explain-item-first'>
          <div className='steps-explain-item-icon t-shirt-icon'></div>
          <p className='steps-explain-item-title'>Wybierz rzeczy</p>
          <hr className='steps-explain-line' />
          <p className='steps-explain-item-text'>
            ubrania, zabawki, sprzęt i inne
          </p>
        </div>
        <div className='steps-explain-item'>
          <div className='steps-explain-item-icon bag-icon'></div>
          <p className='steps-explain-item-title'>Spakuj je</p>
          <hr className='steps-explain-line' />
          <p className='steps-explain-item-text'>
            skorzystaj z worków na śmieci
          </p>
        </div>
        <div className='steps-explain-item'>
          <div className='steps-explain-item-icon loupe-icon'></div>
          <p className='steps-explain-item-title'>Zdecyduj komu chcesz pomóc</p>
          <hr className='steps-explain-line' />
          <p className='steps-explain-item-text'>wybierz zaufane miejsce</p>
        </div>
        <div className='steps-explain-item steps-explain-item-last'>
          <div className='steps-explain-item-icon circle-icon'></div>
          <p className='steps-explain-item-title'>Zamów kuriera</p>
          <hr className='steps-explain-line' />
          <p className='steps-explain-item-text'>
            kurier przyjedzie w dogodnym terminie
          </p>
        </div>
      </div>
      <div className='steps-hand-over'>
        <button className='steps-hand-over-btn'>
          <Link to='/logowanie' className='link-text steps-hand-over-btn-text'>
            ODDAJ RZECZY
          </Link>
        </button>
      </div>
    </section>
  );
}

export default HomeSteps;
