import "./NavBar.css"
import React from 'react';
import {Link} from "react-router-dom"




 const NavBar = () => {
//   function handleDiscordClick() {
//     // Lógica para el botón Discord
//     console.log('Botón Discord clickeado');
//   }

//   function handleJoinClick() {
//     // Lógica para el botón Join
//     console.log('Botón Join clickeado');
//   }

  return (
    <nav className="navbar">
    <Link to="/discover" className="discover">Discover</Link>
    <a href="#" className="join">Join</a>
  </nav>
  );
};

export default NavBar;

{/* <Link to="/discover" className='ruta'> Ir a Discover </Link> */}