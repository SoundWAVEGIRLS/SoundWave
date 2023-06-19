import React from 'react'
import './Form.css'

function Form() {
  return (
    <div className="page-container">
    <h2 className='title-join-the'>
      Join the <span className='end-title-fun'>fun.</span>
    </h2>
    <div className="container-form">
      <form>
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className='input-form'/>
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className='input-form' />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" className='input-form' />
        </div>
        <button type="submit" className="join-button">Join Now</button>
      </form>
    </div>
  </div>
  );
}

export default Form

