import React, { useEffect, useState } from "react";

function HomeContact() {
  const contactValues = { username: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(contactValues);
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

  const url = `https://fer-api.coderslab.pl/v1/portfolio/contact`;

  fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  })
    .then(res => res.json())
    .then(res => {
      console.log("Dodałem użytkownika:");
      console.log(res);
      console.log(formValues);
    });

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
    if (!values.username) {
      errors.username = "Podane imię jest nieprawidłowe!";
    }
    if (!values.email) {
      errors.email = "Podaney email jest nieprawidłowy!";
    } else if (!regex.test(values.email)) {
      errors.email = "Podaney email jest nieprawidłowy!";
    }
    if (!values.message) {
      errors.message = "Wiadomość musi mieć conajmniej 120 znaków!";
    } else if (values.message.length < 120) {
      errors.message = "Wiadomość jest za krótka";
    }
    return errors;
  };

  return (
    <section className='home-contact' id='contactSection'>
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      <form onSubmit={handleSubmit} className='home-contact-info'>
        <p className='home-contact-info-title'>Skontaktuj się z nami</p>
        <div className='decoration'></div>
        <div className='home-contact-info-details'>
          <div>
            <p>Wpisz swoje imię</p>
            <input
              type='text'
              name='username'
              id='contactName'
              className='ditails-name'
              placeholder='Krzysztof'
              value={formValues.username}
              onChange={handleChange}></input>
            <p>{formErrors.username}</p>
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
              onChange={handleChange}></input>
            <p>{formErrors.email}</p>
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
            onChange={handleChange}></input>
          <p>{formErrors.message}</p>
        </div>
        <button className='contact-send-btn'>Wyślij</button>
      </form>
    </section>
  );
}

export default HomeContact;
