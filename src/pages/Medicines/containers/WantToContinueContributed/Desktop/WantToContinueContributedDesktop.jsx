import PhotosWrapperWantToContinueContributed from './components/PhotosWrapperWantToContinueContributed';
import {
  Button,
  Container,
  Content,
  Paragraph,
  PhotoWrapper,
  Title,
} from './WantToContinueContributedDesktop.styles';

const WhatToContinueContributedDesktop = () => {
  return (
    <Container>
      <PhotoWrapper>
        <PhotosWrapperWantToContinueContributed />
      </PhotoWrapper>

      <Content>
        <Title>Quer seguir contribuindo?</Title>
        <Paragraph>
          Ficamos muito felizes com o seu apoio! Para acessar nossas campanhas
          de doação, clique no botão abaixo.
        </Paragraph>
        <Button text="Ir para Doações" route="/doacao" />
      </Content>
    </Container>
  );
};

export default WhatToContinueContributedDesktop;
