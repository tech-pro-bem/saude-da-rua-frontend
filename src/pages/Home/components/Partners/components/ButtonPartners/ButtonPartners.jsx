import { Container } from './ButtonPartners.style';

const ButtonPartners = () => {
  return (
    <Container
      onClick={() => (window.location = 'mailto:saudedarua@gmail.com')}
    >
      Seja nosso parceiro
    </Container>
  );
};

export default ButtonPartners;
