import { Container, Title } from './AboutUsMobile.style';
import { FirstPhoto, SecondPhoto, WrapperTextAboutUs } from './components';

const AboutUsMobile = () => {
  return (
    <Container>
      <Title>Quem somos</Title>
      <FirstPhoto />
      <WrapperTextAboutUs />
      <SecondPhoto />
    </Container>
  );
};

export default AboutUsMobile;
