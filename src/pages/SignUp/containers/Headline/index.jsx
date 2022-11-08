import { Highlight } from '@components';
import { Container } from './style';

export const Headline = () => {
  return (
    <Container>
      <h1>
        Seja uma pessoa <Highlight>voluntária</Highlight>
      </h1>
      <p>
        Se você é profissional ou estudante da área da saúde, participe das
        nossas ações!
      </p>
    </Container>
  );
};
