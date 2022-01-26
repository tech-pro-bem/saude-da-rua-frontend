import React from 'react';
import logo from '../../../../assets/Logo_saude_da_rua.png';
import { Container } from './Header.style.js';

// TODO
// - padding é palavra reservada, refatorar
// - não há motivos para ter três DIVs encadeadas aqui

const Header = () => (
  <Container>
    <img src={logo} alt="Logo Saúde da Rua" className="logo" />
  </Container>
);

export default Header;
