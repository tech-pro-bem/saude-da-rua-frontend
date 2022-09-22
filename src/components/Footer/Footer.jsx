import React from 'react';

import {
  Contact,
  Copyright,
  CopyrightMobile,
  Divider,
  FooterContainer,
  HeadersFooter,
  Locations,
  Logo,
  LogoMobile,
  MainFooter,
  SocialMedia,
  SocialMediaMobile,
  SocialMediaMobileContainer,
  Text,
  Title,
} from './Footer.style.js';

import { Email, Instagram, WhatsApp } from '@assets';

const Footer = () => (
  <FooterContainer>
    <Divider />
    <MainFooter>
      <HeadersFooter>
        <Title>Saúde da Rua</Title>
        <Text>
          Criado por estudantes de medicina, o Saúde da Rua
          <br />
          leva <strong>atendimento médico humanizado e recorrente</strong>{' '}
          <br />
          às populações mais vulneráveis da sociedade.
          <br />O Saúde da Rua nasceu em julho de 2020 com a missão
        </Text>
      </HeadersFooter>

      <Locations>
        <Title>Onde estamos</Title>
        <ul>
          <li>São Paulo - SP</li>
          <li>Campinas - SP</li>
          <li>São José do Rio Preto - SP</li>
          <li>São Carlos - SP</li>
          <li>Itajaí - SC</li>
        </ul>
      </Locations>

      <Contact>
        <Title>Contato</Title>
        <SocialMedia>
          <li>
            <a
              href="https://wa.me/5511985914817"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Logo src={WhatsApp} alt="WhatsApp" />
              WhatsApp
            </a>
          </li>
          <li>
            <a href="mailto:saudedarua@gmail.com">
              <Logo src={Email} alt="E-mail" />
              saudedarua@gmail.com
            </a>
          </li>

          <li>
            <a
              href="https://wa.me/5511985914817"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Logo src={Instagram} alt="Instagram" />
              Instagram
            </a>
          </li>
        </SocialMedia>
      </Contact>

      <SocialMediaMobileContainer>
        <Title>Contato</Title>
        <SocialMediaMobile>
          <a
            href="https://wa.me/5511985914817"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LogoMobile src={WhatsApp} alt="WhatsApp" />
          </a>

          <a href="mailto:saudedarua@gmail.com">
            <LogoMobile src={Email} alt="E-mail" />
          </a>

          <a
            href="https://instagram.com/saudedarua?utm_medium=copy_link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LogoMobile src={Instagram} alt="Instagram" />
          </a>
        </SocialMediaMobile>
      </SocialMediaMobileContainer>
    </MainFooter>

    <Copyright>
      <li>Copyright©2021, Saúde da Rua. Todos os direitos reservados</li>
      <li>|</li>
      <li>
        <strong>Política de privacidade</strong>
      </li>
      <li>|</li>

      <li>
        Feito com amor pela{' '}
        <strong>
          <a href="https://techprobem.com.br/" target="_blank" rel="noreferrer">
            Tech Pro Bem
          </a>
        </strong>
      </li>
    </Copyright>

    <CopyrightMobile>
      <li>
        <strong>Política de privacidade</strong>
      </li>
      <li>
        Feito com amor pela{' '}
        <strong>
          <a href="https://techprobem.com.br/" target="_blank" rel="noreferrer">
            Tech Pro Bem
          </a>
        </strong>
      </li>
      <li>
        Copyright©2021, Saúde da Rua.
        <br />
        Todos os direitos reservados
      </li>
    </CopyrightMobile>
  </FooterContainer>
);

export default Footer;
