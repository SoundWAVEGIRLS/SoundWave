import React from 'react'
import './Form.css'

function Form() {
  return (
    <div>
      <h2>Join the <h2 className='rosa'>fun.</h2></h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Join Now</button>
      </form>
    </div>
  )
}

export default Form

