/* import "./JoinPage.css"
import React from 'react';

function JoinPage() {
  return( <h3 className="join">Join</h3> );
}

export default JoinPage;
 */
import React from 'react';
import "./JoinPage.css"

const JoinPage = () => {
  return (
    <div>
      <h1>Join the fun</h1>
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
  );
};

export default JoinPage;
