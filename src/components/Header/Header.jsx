import Logo from '@assets/Logo_saude_da_rua.png';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import {
  Container,
  ContainerMobile,
  Content,
  DonationButton,
  ListNavMenu,
  NavLinkContent,
  NavLinkMenu,
  NavMenu,
  NavMenuMobile,
  ToggleMenu,
} from './Header.style.js';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const NAV_LINKS = [
    {
      id: 1,
      to: '/',
      text: 'Início',
    },
    {
      id: 2,
      to: 'doacao',
      text: 'Doações',
    },

    {
      id: 3,
      to: 'medicament',
      text: 'Medicamentos',
    },

    {
      id: 4,
      to: 'seja-voluntario',
      text: 'Voluntários',
    },
  ];

  const NavLinkRender = ({ text, to, id }) => {
    return (
      <ListNavMenu>
        <NavLinkContent to={to} key={id} onClick={() => setToggle(!toggle)}>
          {text}
        </NavLinkContent>
      </ListNavMenu>
    );
  };

  return (
    <>
      <Container>
        <Content>
          <NavLinkContent to="/">
            <img src={Logo} alt="Logo Saúde da Rua" />
          </NavLinkContent>
        </Content>
        <NavMenu>
          {NAV_LINKS.map((link, index) => (
            <NavLinkRender to={link.to} text={link.text} key={index} />
          ))}
          <DonationButton text="Doe agora" route="/doacao" />
        </NavMenu>

        <ToggleMenu onClick={() => setToggle(!toggle)}>
          {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
        </ToggleMenu>
      </Container>

      <ContainerMobile>
        <NavMenuMobile isOpened={toggle}>
          {toggle && (
            <NavLinkMenu>
              <div>
                {NAV_LINKS.map((link, index) => (
                  <NavLinkRender
                    to={link.to}
                    text={link.text}
                    key={index}
                    onClick={() => setToggle(!toggle)}
                  />
                ))}
              </div>
              <DonationButton
                text="Doe agora"
                route="/doacao"
                onClick={() => setToggle(!toggle)}
              />
            </NavLinkMenu>
          )}
        </NavMenuMobile>
      </ContainerMobile>
    </>
  );
};

export default Header;
