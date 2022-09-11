import Logo from '@assets/Logo_saude_da_rua.png';
import React from 'react';

import {
  Container,
  Content,
  DonationButton,
  LinksContainer,
  NavLinkHeader,
} from './Header.style.js';

const Header = () => {
  return (
    <>
      <Container>
        <Content>
          <NavLinkHeader to="/">
            <img src={Logo} alt="Logo Saúde da Rua" className="logo" />
          </NavLinkHeader>
        </Content>

        <LinksContainer>
          <NavLinkHeader to="doacao">Doações</NavLinkHeader>
          <NavLinkHeader to="seja-voluntario">Seja voluntário</NavLinkHeader>
          <NavLinkHeader to="/">Medicamentos</NavLinkHeader>
          <NavLinkHeader to="sobre">Sobre e Ações</NavLinkHeader>
          <DonationButton text="Doe agora" route="/doacao" />
        </LinksContainer>
      </Container>
    </>
  );
};

export default Header;
