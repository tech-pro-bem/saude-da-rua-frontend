import {
  Contact,
  ContactMobile,
  Copyright,
  CopyrightMobile,
  Divider,
  FooterContainer,
  HeadersFooter,
  Link,
  Locations,
  MainFooter,
  Text,
  Title,
} from './Footer.style.js';

import { Structure } from '@components';

import SocialMediaDesktop from '../SocialMedia/desktop/SocialMediaDesktop.jsx';
import SocialMediaMobile from '../SocialMedia/mobile/SocialMediaMobile.jsx';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <Structure>
    <FooterContainer>
      <Divider />
      <MainFooter>
        <HeadersFooter>
          <Title>Saúde da Rua</Title>
          <Text>
            Criado por estudantes de Medicina, o Saúde da Rua leva{' '}
            <strong>atendimento médico humanizado e recorrente</strong> às
            populações mais vulneráveis da sociedade.
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

        <div>
          <Contact>
            <Title>Contato</Title>
            <SocialMediaDesktop />
          </Contact>
        </div>

        <ContactMobile>
          <Title>Contato</Title>
          <SocialMediaMobile />
        </ContactMobile>
      </MainFooter>

      <Copyright>
        <li>Copyright©2021, Saúde da Rua. Todos os direitos reservados</li>
        <li>|</li>
        <NavLink to="/politica-de-privacidade">
          <strong>Política de Privacidade</strong>
        </NavLink>
        <li>|</li>

        <li>
          Feito com amor pela{' '}
          <strong>
            <a
              href="https://techprobem.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              Tech Pro Bem
            </a>
          </strong>
        </li>
      </Copyright>

      <CopyrightMobile>
        <NavLink to="/politica-de-privacidade">
          <li>Política de privacidade</li>
        </NavLink>

        <li>
          Feito com amor pela
          <Link
            href="https://techprobem.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Tech Pro Bem
          </Link>
        </li>

        <li>
          Copyright©2021, Saúde da Rua.
          <br />
          Todos os direitos reservados
        </li>
      </CopyrightMobile>
    </FooterContainer>
  </Structure>
);

export default Footer;
