import { Container } from './AboutUs.style';
import { Photos, WrapperTextAbout } from './components';

function AboutUs() {
  return (
    <>
      <Container>
        <Photos />
        <WrapperTextAbout />
      </Container>
    </>
  );
}

export default AboutUs;
