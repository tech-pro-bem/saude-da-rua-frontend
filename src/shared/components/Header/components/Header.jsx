import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/Logo_saude_da_rua.png';
import { Container } from './Header.style.js';

const Header = () => (
  <Container>
    <Link to="/">
      <img src={logo} alt="Logo Saúde da Rua" className="logo" />
    </Link>
  </Container>
);

export default Header;
