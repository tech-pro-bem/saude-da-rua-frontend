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
    </Container>
  );
};

export default ExperienceDesktop;
