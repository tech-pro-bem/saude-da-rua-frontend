import React from 'react';

import { Container } from './Footer.style.js';
import logo from '../../../../assets/Logo_saude_da_rua.png';

// TODO
// - padding é palavra reservada, refatorar
// - não há motivos para ter três DIVs encadeadas aqui

const Footer = () => (
  <Container>
    <div className="footerContent">
      <hr />
      <img src={logo} alt="Logo Saúde da Rua" className="logoFooter" />
    </div>
  </Container>
);

export default Footer;
