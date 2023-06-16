
 import "./Navbar.css"
import React from 'react';




 const Navbar = () => {
  function handleDiscordClick() {
    // Lógica para el botón Discord
    console.log('Botón Discord clickeado');
  }

  function handleJoinClick() {
    // Lógica para el botón Join
    console.log('Botón Join clickeado');
  }

  return (
    <nav className="navbar">
      <a href="#" className="discover" onClick={handleDiscordClick}>Discover</a>
      <a href="#" className="join" onClick={handleJoinClick}>Join</a>
    </nav>
  );
};

export default Navbar;
 

