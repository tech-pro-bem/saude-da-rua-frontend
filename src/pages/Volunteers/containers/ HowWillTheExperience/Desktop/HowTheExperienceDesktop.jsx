import { LinkButton } from '@components';
import PhotosWrapperHowTheExperience from './components/PhotosWrapperHowTheExperience';
import {
  Container,
  Content,
  Heading,
  Paragraph,
  PhotoWrapper,
} from './HowTheExperienceDesktop.style';

const HowTheExperienceDesktop = () => {
  return (
    <Container>
      <PhotoWrapper>
        <PhotosWrapperHowTheExperience />
      </PhotoWrapper>

      <Content>
        <Heading>Como você nos fortalece?</Heading>

        <Paragraph>
          <strong> Os voluntários são os responsáveis pelo acolhimento</strong>{' '}
          de pacientes durante as ações do Saúde da Rua.
        </Paragraph>

        <Paragraph>
          <strong> Doar conhecimento e tempo</strong> é uma das formas que
          profissionais da área da saúde têm de apoiar a nossa causa.
        </Paragraph>

        <LinkButton
          text="Inscreva-se"
          route="/inscreva-se"
          style={{ width: '272px', textAlign: 'center' }}
        />
      </Content>
    </Container>
  );
};

export default HowTheExperienceDesktop;
