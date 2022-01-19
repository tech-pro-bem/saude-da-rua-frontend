import { Container } from './AboutUs.style';
import { Photos, WrapperTextAboutUs } from './components';

function AboutUs() {
  return (
    <>
      <Container>
        <Photos />
        <WrapperTextAboutUs />
      </Container>
    </>
  );
}

export default AboutUs;
