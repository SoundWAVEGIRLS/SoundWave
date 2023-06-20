import React from 'react'
import './Form.css'

function Form() {
  return (
    <div className="page-container">
    <h2 className='title-join-the'>
      Join the <span className='end-title-fun'>fun.</span>
    </h2>
  
      <form className='container-form'>
        
          <label htmlFor="name" className='text-form'>Name:</label>
          <input type="text" id="name" name="name" className='input-form'/>
       
       
          <label htmlFor="email" className='text-form'>Email:</label>
          <input type="email" id="email" name="email" className='input-form' />
       
        
          <label htmlFor="password" className='text-form'>Password:</label>
          <input type="password" id="password" name="password" className='input-form' />
        
        <button type="submit" className="join-button">Join Now</button>
      </form>
    </div>
 
  );
}

export default Form
