import React from 'react';

import JoinPage from './components/Navbar/JoinPage';
import DiscoverPage from './components/Navbar/DiscoverPage';

 function App() {
  return (
    <div className='navbar'>
   <JoinPage/>
   <DiscoverPage/>
    </div>
    
  )
} 
/* import React from 'react';
 */
/* function App() {
  return (
    <div>
      <button onClick={() => console.log('Join clicked')}>Join</button>
      <button onClick={() => console.log('Discover clicked')}>Discover</button>
    </div>
  );
} */

export default App;

  /*  <Link to="/join">Join</Link>return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/discover">Discover</Link>
            </li>
            <li>
              <Link to="/join">Join</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/discover">
            <DiscoverPage />
          </Route>
          <Route path="/join">
            <JoinPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
 */
/* export default App;
 */