import React, { useState } from "react";

const contactValues = { name: "", email: "", message: "" };
const url = `https://fer-api.coderslab.pl/v1/portfolio/contact`;

function HomeContact() {
  const [formValues, setFormValues] = useState(contactValues);
  const [formErrors, setFormErrors] = useState(contactValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onBlur = () => {
    setFormErrors(validate(formValues));
  };

  const resetForm = () => {
    setFormValues({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formErrors.name && !formErrors.email && !formErrors.message) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      })
        .then(res => res.json())
        .then(res => {
          resetForm();
          setIsSubmit(true);
          setTimeout(() => {
            setIsSubmit(false);
          }, 3000);
        });
    }
  };

  const validate = values => {
    const errors = {};
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!values?.name) {
      errors.name = "Podane imię jest nieprawidłowe!";
    } else {
      errors.name = "";
    }
    if (!values?.email) {
      errors.email = "Podaney email jest nieprawidłowy!";
    } else if (!regex.test(values?.email)) {
      errors.email = "Podaney email jest nieprawidłowy!";
    } else {
      errors.email = "";
    }
    if (!values?.message) {
      errors.message = "Wiadomość musi mieć conajmniej 120 znaków!";
    } else if (values?.message?.length < 120) {
      errors.message = "Wiadomość jest za krótka";
    } else {
      errors.message = "";
    }
    return errors;
  };

  return (
    <section className='home-contact' id='contactSection'>
      <form onSubmit={handleSubmit} className='home-contact-info'>
        <p className='home-contact-info-title'>Skontaktuj się z nami</p>
        {isSubmit && (
          <p className='success-text'>
            Wiadomość została wysłana! <br /> Wkrótce się skontaktujemy.
          </p>
        )}
        <div className='decoration'></div>
        <div className='home-contact-info-details'>
          <div>
            <p>Wpisz swoje imię</p>
            <input
              type='text'
              name='name'
              id='contactName'
              className='ditails-name'
              placeholder='Krzysztof'
              value={formValues.name}
              onChange={handleChange}
              onBlur={onBlur}></input>
            <p>{formErrors?.name}</p>
          </div>
          <div>
            <p>Wpisz swój email</p>
            <input
              type='text'
              name='email'
              id='contactEmail'
              className='ditails-email'
              placeholder='abcd@xyz.com'
              value={formValues.email}
              onChange={handleChange}
              onBlur={onBlur}></input>
            <p>{formErrors?.email}</p>
          </div>
        </div>
        <div>
          <p className='ditails-message-title'>Wpisz swoją wiadomość</p>
          <input
            type='text'
            name='message'
            id='contactMessage'
            className='ditails-message'
            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            value={formValues.message}
            onChange={handleChange}
            onBlur={onBlur}></input>
          <p>{formErrors?.message}</p>
        </div>
        <button className='contact-send-btn'>Wyślij</button>
      </form>
    </section>
  );
}

export default HomeContact;
