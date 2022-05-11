import React from "react";

function HomeHeader() {
  return (
    <section className='home-header'>
      <div className='home-header-picture'></div>
      <div className='home-header-start'>
        <p>Zacznij pomagać!</p>
        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
        <button>ODDAJ RZECZY</button>
        <button>ZORGANIZUJ ZBIÓRKĘ</button>
      </div>
    </section>
  );
}

export default HomeHeader;
