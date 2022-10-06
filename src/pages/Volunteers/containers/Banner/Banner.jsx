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
        <LinkButton text="Inscreva-se" route="/seinscreva" />
      </div>
    </Container>
  );
};

export default Banner;
