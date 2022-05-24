import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Register() {
  const initialValues = { emailRegister: "", password: "", repassword: "" };
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
    if (!values.emailRegister) {
      errors.emailRegister = "Podaney email jest nieprawidłowy!";
    } else if (!regex.test(values.emailRegister)) {
      errors.emailRegister = "Podaney email jest nieprawidłowy!";
    }
    if (!values.password) {
      errors.password = "Hasło jest za krótkie!";
    } else if (values.password.length < 6) {
      errors.password = "Hasło jest za krótkie!";
    }
    if (!values.repassword) {
      errors.repassword = "Hasło jest nieprawidłowe!";
    } else if (values.repassword !== values.password) {
      errors.repassword = "Hasło jest nieprawidłowe!";
    }
    return errors;
  };

  return (
    <section className='register'>
      <p className='register-title'>Załóż konto</p>
      <div className='decoration'></div>
      <form onSubmit={handleSubmit} className='register-form'>
        <div className='register-form-values'>
          <p className='register-form-text'>Email</p>
          <input
            type='text'
            name='emailRegister'
            id='registerEmail'
            value={formValues.emailRegister}
            onChange={handleChange}
            className='register-form-input'></input>
          <p className='login-errors'>{formErrors.emailRegister}</p>
        </div>
        <div className='register-form-values'>
          <p className='register-form-text'>Hasło</p>
          <input
            type='text'
            name='password'
            id='registerPassword'
            value={formValues.password}
            onChange={handleChange}
            className='register-form-input'></input>
          <p className='login-errors'>{formErrors.password}</p>
        </div>
        <div className='register-form-values'>
          <p className='register-form-text'>Powtórzy hasło</p>
          <input
            type='text'
            name='repassword'
            id='registerRepassword'
            value={formValues.repassword}
            onChange={handleChange}
            className='register-form-input'></input>
          <p className='login-errors'>{formErrors.repassword}</p>
        </div>
        <div className='form-btns'>
          <button className='create-account-btn'>Załóż konto</button>
          <button className='log-in-btn'>
            <Link to='/logowanie' className='link-text btn-text'>
              Zaloguj się
            </Link>
          </button>
        </div>
      </form>
    </section>
  );
}

export default Register;
