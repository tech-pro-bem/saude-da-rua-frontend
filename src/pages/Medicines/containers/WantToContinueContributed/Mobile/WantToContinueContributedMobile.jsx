import {
  Button,
  Container,
  Paragraph,
  Title,
} from './WantToContinueContributedMobile.style';

const WhatToContinueContributedMobile = () => {
  return (
    <Container>
      <Title>Quer seguir contribuindo?</Title>
      <Paragraph>
        Ficamos muito felizes com o seu apoio! Para acessar nossas campanhas de
        doação, clique no botão abaixo.
      </Paragraph>
      <Button text="Ir para Doações" route="/doacao" />
    </Container>
  );
};

export default WhatToContinueContributedMobile;
