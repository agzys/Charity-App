import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  const initialValues = { mail: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });

 const validate = values => {
    const errors = {};
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!values.mail) {
      errors.mail = "Podaney email jest nieprawidłowy!";
    } else if (!regex.test(values.mail)) {
      errors.mail = "Podaney email jest nieprawidłowy!";
    }
    if (!values.password) {
      errors.password = "Hasło jest za krótkie!";
    } else if (values.password.length < 6) {
      errors.password = "Hasło jest za krótkie!";
    }
    return errors;
  };
  return (
    <section className='login'>
      <p className='login-title'>Zaloguj się</p>
      <div className='decoration'></div>
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='login-form-values'>
          <p className='login-form-text'>Email</p>
          <input
            type='text'
            name='mail'
            id='loginMail'
            className='login-form-input'
            value={formValues.mail}
            onChange={handleChange}></input>
          <p className='login-errors'>{formErrors.mail}</p>
        </div>
        <div className='login-form-values'>
          <p className='login-form-text'>Hasło</p>
          <input
            type='text'
            name='password'
            id='loginPassword'
            className='login-form-input'
            value={formValues.password}
            onChange={handleChange}></input>
          <p className='login-errors'>{formErrors.password}</p>
        </div>

        <div className='login-form-btns'>
          <button className='create-account-btn'>
            <Link to='/rejestracja' className='link-text btn-text'>
              Załóż konto
            </Link>
          </button>
          <button className='log-in-btn btn-text'>Zaloguj się</button>
        </div>
      </form>
    </section>
  );
}

export default Login;
