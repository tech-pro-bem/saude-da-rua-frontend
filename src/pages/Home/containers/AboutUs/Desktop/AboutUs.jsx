import { Container } from './AboutUs.style';
import { Photos, WrapperTextAboutUs } from './components';

const AboutUs = () => {
  return (
    <Container>
      <Photos />
      <WrapperTextAboutUs />
    </Container>
  );
};

export default AboutUs;
