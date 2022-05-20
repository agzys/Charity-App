import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className='login'>
      <p className='login-title'>Zaloguj się</p>
      <div className='decoration'></div>
      <form className='login-form'>
        <div className='login-form-values'>
          <p className='login-form-text'>Email</p>
          <input type='text' name='login' className='login-form-input'></input>
        </div>
        <div className='login-form-values'>
          <p className='login-form-text'>Hasło</p>
          <input
            type='text'
            name='password'
            className='login-form-input'></input>
        </div>
      </form>
      <div className='form-btns'>
        <button className='create-account-btn'>
          <Link to='/rejestracja' className='link-text btn-text'>
            Załóż konto
          </Link>
        </button>
        <button className='log-in-btn btn-text'>Zaloguj się</button>
      </div>
    </section>
  );
}

export default Login;
