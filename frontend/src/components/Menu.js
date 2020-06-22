import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../assets/Logo1.png';

import './menu.css';

export default function Menu(){

  return (
    <>
      <div className="navigation-container">
        <div className="stroke">
          <Link to="/"><img src={logoImg} alt="Developer Software"/></Link>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/solucoes'>Soluções</Link></li>
            <li><Link to='/empresa'>Sobre</Link></li>
            <li><Link to='/contato'>Contato</Link></li>
            <li><a href='//www.developer.inf.br/newWebsite/novidades.php/'>Novidades</a></li>
          </ul>
        </div>
      </div>
      <div className="menu-separator"/>
    </>
  );
}