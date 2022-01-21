import { Container } from './AboutUs.style';
import { Photos, WrapperTextAboutUs } from './components';

///** TODO:
// - refatorar function para function component

function AboutUs() {
  return (
    <Container>
      <Photos />
      <WrapperTextAboutUs />
    </Container>
  );
}

export default AboutUs;
