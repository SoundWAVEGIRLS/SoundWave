import "./NavBar.css"
import React from 'react';
import {Link} from "react-router-dom"




 const NavBar = () => {

  return (
    <nav className="navbar">
    <Link to="/discover" className="discover">Discover</Link>
    <Link to="/join" className="join">Join</Link>
  </nav>
  );
};

export default NavBar;
