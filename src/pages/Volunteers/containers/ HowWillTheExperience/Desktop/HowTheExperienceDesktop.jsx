import { LinkButton, Highlight } from '@components';
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
        <Heading>
          Como será a <Highlight>experiência</Highlight>?
        </Heading>

        <Paragraph>
          Antes de ir pra rua, montamos um time de profissionais inscritos aqui
          no site. <strong>Fique de olho no WhatsApp</strong> que é por lá que
          fazemos a convocação!
        </Paragraph>

        <Paragraph>
          Durante a ação, são eles que irão realizar os{' '}
          <strong>atendimentos respeitosos e humanizados</strong> que nos
          orgulham tanto.
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
