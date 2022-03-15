import React from 'react';
import { Container } from './Banner.styles';

export const Banner = () => {
  return (
    <Container>
      <div>
        <h1>
          Doe e <em>ajude</em> pessoas em situação de rua
        </h1>
        <p>
          Nos ajude a levar atendimento médico <br />
          humanizado e recorrente à população vulnerável.
        </p>

        <h4>Faça parte dessa ação!</h4>
      </div>
    </Container>
  );
};
