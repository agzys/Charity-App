import React from "react";

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
        <button className='create-account-btn'>Załóż konto</button>
        <button className='log-in-btn'>Zaloguj się</button>
      </div>
    </section>
  );
}

export default Login;
