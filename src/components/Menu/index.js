import React from 'react';
import Logo from './../../assents/image/anaFlix.png'
import './Menu.css'
import Button from '../Button';

function Menu () {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="Logo AnaFlix" className="Logo" />
      </a>

      <Button as="a" href="" className="ButtonLink" > Novo vídeo </Button>
    </nav>
  );
}

export default Menu;