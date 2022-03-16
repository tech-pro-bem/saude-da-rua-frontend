import React from 'react';
import { Container } from './Banner.style';
import { Highlight, LinkButton } from '../../../../../shared/components';

export const Banner = () => {
  return (
    <Container>
      <div>
        <h1>
          Doe e <Highlight>ajude</Highlight> pessoas em situação de rua
        </h1>
        <p>
          Nos ajude a levar atendimento médico <br />
          humanizado e recorrente à população vulnerável.
        </p>

        <h4>Faça parte dessa ação!</h4>

        <LinkButton text="Doe qualquer valor" route="/doacao" />
      </div>
    </Container>
  );
};

export default Banner;
