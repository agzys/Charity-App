import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className='register'>
      <p className='register-title'>Załóż konto</p>
      <div className='decoration'></div>
      <form className='register-form'>
        <div className='register-form-values'>
          <p className='register-form-text'>Email</p>
          <input
            type='text'
            name='register'
            className='register-form-input'></input>
        </div>
        <div className='register-form-values'>
          <p className='register-form-text'>Hasło</p>
          <input
            type='text'
            name='password'
            className='register-form-input'></input>
        </div>
        <div className='register-form-values'>
          <p className='register-form-text'>Powtórzy hasło</p>
          <input
            type='text'
            name='password-repead'
            className='register-form-input'></input>
        </div>
      </form>
      <div className='form-btns'>
        <button className='create-account-btn'>
          <Link to='/rejestracja' className='link-text btn-text'>
            Załóż konto
          </Link>
        </button>
        <button className='log-in-btn'>
          <Link to='/logowanie' className='link-text btn-text'>
            Zaloguj się
          </Link>
        </button>
      </div>
    </section>
  );
}

export default Register;
