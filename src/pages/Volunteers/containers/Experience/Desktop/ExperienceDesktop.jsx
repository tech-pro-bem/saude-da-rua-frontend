import { Highlight, LinkButton } from '@components';
import PhotoWrapper from './components/PhotosWrapper';
import { Container } from './ExperienceDesktop.style';

const ExperienceDesktop = () => {
  return (
    <Container>
      <h2>
        <Highlight>Voluntários</Highlight> em ação
      </h2>
      <PhotoWrapper />
      <LinkButton
        style={{ width: '272px', textAlign: 'center' }}
        text="Inscreva-se"
        route="/inscreva-se"
      />
    </Container>
  );
};

export default ExperienceDesktop;
