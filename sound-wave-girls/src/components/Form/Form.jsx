import React, { useState } from 'react';
import './Form.css';

function Form() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      password: '',
      registered: '',
    });
    const registeredText = document.getElementById('registered');
    registeredText.removeAttribute('hidden');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    const registeredText = document.getElementById('registered');
    registeredText.setAttribute('hidden', true);
  };

  return (
    <div className="page-container">
      <div className="container-title">
        <h2 className="title-join-the">
          Join the <span className="end-title-fun">fun.</span>
        </h2>
      </div>
      <form className="container-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-form">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="input-form"
          placeholder='Enter Name'
          required
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email" className="text-form">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="input-form"
          placeholder='Enter Email'
          required
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password" className="text-form">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="input-form"
          placeholder='Enter Password'
          required
          value={formData.password}
          onChange={handleChange}
        />
        <p id="registered" className="feedbackMensaje" hidden>
          You have successfully registered
        </p>
        <button type="submit" className="join-button">
          Join Now
        </button>
      </form>
    </div>
  );
}

export default Form;
