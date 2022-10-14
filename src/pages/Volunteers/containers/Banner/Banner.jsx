import React from 'react';
import { Container } from './Banner.style';
import { Highlight, LinkButton } from '@components';

export const Banner = () => {
  return (
    <Container>
      <div>
        <h1>
          Seja uma pessoa <Highlight>voluntária</Highlight>
        </h1>
        <p className="big">
          Se você é estudante ou profissional da área da saúde, venha pra rua
          com a gente!
        </p>
        <LinkButton
          style={{ minWidth: '272px', textAlign: 'center' }}
          text="Inscreva-se"
          route="/inscreva-se"
        />
      </div>
    </Container>
  );
};

export default Banner;
