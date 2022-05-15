import React from "react";

function HomeContact() {
  return (
    <section className='home-contact' id='contactSection'>
      <div className='home-contact-info'>
        <p className='home-contact-info-title'>Skontaktuj się z nami</p>
        <div className='decoration'></div>
        <div className='home-contact-info-ditails'>
          <div>
            <p>Wpisz swoje imię</p>
            <input
              type='text'
              id='contactName'
              className='ditails-name'
              placeholder='Krzysztof'></input>
          </div>
          <div>
            <p>Wpisz swój email</p>
            <input
              type='text'
              id='contactEmail'
              className='ditails-email'
              placeholder='abcd@xyz.com'></input>
          </div>
        </div>
        <div>
          <p className='ditails-message-title'>Wpisz swoją wiadomość</p>
          <input
            type='text'
            id='contactMessage'
            className='ditails-message'
            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'></input>
        </div>
        <button className='contact-send-btn'>Wyślij</button>
      </div>
    </section>
  );
}

export default HomeContact;
