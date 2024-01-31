import React, { useState } from 'react';
import './HamburgerMenu.css';
import 'typeface-anton';
import 'typeface-orbitron';
import { Link } from 'react-router-dom';
import avionsData from './../../avion1.json';


const HamburgerMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
    setShowSubmenu(false);
  };

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`hamburger-menu ${isActive ? 'active' : ''}`} onClick={toggleMenu} style={{ fontFamily: 'Orbitron, sans-serif' }}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className={`left-menu ${isActive ? 'active' : ''}`}>
        <div className="menu">
          <div className="flex flex-col space-y-6 font-bold rounded-md">
            <Link to="/" >
              <a className='acceuil' href="#">Accueil</a>
            </Link>
            <div className="dropdown" onClick={stopPropagation}>
              <a href="#" className='Avion' onClick={toggleSubmenu}>
                Avions de chasse
              </a>
              {showSubmenu && (
                <div className="submenu">
                  {avionsData.avionsDeChasseModernes.map((avion, index) => (
                    <Link key={index} to={`/avion_detail/${index}`} onClick={stopPropagation}>
                      <a href="#" className="submenu-link">{avion.nom}</a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/a_propos" >
            <a className='about' href="#">A propos de nous</a>
            </Link>
            
            <Link to="/tarif" >
            <a className='tarif' href="#">Tarif</a>
            </Link>

          </div>
        </div>
      </div>
    </div>

  );
};

export default HamburgerMenu;

