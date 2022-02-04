import React from 'react';

import { Container } from './Footer.style.js';

import { social1, social2, social3 } from '../../../../assets/index.js';

const Footer = () => (
  <Container>
    <hr />
    <div className="ft-main">
      <div className="ft-main-item">
        <h2 className="ft-title">Saúde da Rua</h2>
        <p className="big">
          {' '}
          O Saúde da Rua nasceu em julho de 2020 com a missão<br></br>de
          <strong>levar atendimento médico humanizado e recorrente </strong>
          <br></br>às camadas mais vulneráveis da sociedade.
        </p>
      </div>

      <div className="ft-main-item">
        <h2 className="ft-title">Onde estamos</h2>
        <ul className="locations">
          <li>São Paulo - SP</li>
          <li>Campinas - SP</li>
          <li>São José do Rio Preto - SP</li>
          <li>São Carlos - SP</li>
          <li>Itajaí - SC</li>
        </ul>
      </div>

      <div className="ft-main-item">
        <h2 className="ft-title3">Contato</h2>
        <ul className="midia">
          <li>
            <a href="#">
              <img src={social1} alt="WhatsApp" className="logo" />
              WhatsApp
            </a>
          </li>
          <li>
            <a href="#">
              <img src={social2} alt="E-mail" className="logo" />
              saudedarua@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/saudedarua?utm_medium=copy_link"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={social3} alt="Instagram" className="logo" />
              @saudedarua
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="ft-legal">
      <ul className="ft-legal-list">
        <li>Copyright©2021, Saúde da Rua. Todos os direitos reservados</li>
        <li>|</li>
        <li>
          <strong>Política de privacidade</strong>
        </li>
        <li>|</li>
        <li>
          Feito com amor pela <strong>Tech Pro Bem </strong>
        </li>
      </ul>
    </div>
  </Container>
);

export default Footer;
