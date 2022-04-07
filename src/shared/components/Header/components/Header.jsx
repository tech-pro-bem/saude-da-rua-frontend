import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/Logo_saude_da_rua.png';
import { Container, DonationButton, LinksContainer } from './Header.style.js';

const Header = () => (
  <Container>
    <Link to="/">
      <img src={logo} alt="Logo Saúde da Rua" className="logo" />
    </Link>
    <LinksContainer>
      <Link to="doacao">Doações</Link>
    </LinksContainer>
    <DonationButton text="Doe agora" route="/doacao" />
  </Container>
);

export default Header;
