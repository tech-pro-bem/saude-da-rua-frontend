import { Container, Title } from './AboutUsMobile.style';
import { WrapperTextAboutUs, FirstPhoto, SecondPhoto } from './components';

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
