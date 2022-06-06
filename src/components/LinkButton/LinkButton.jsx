import { Container } from './LinkButton.style';

export const LinkButton = ({ text, route, ...rest }) => {
  return (
    <Container to={route} {...rest}>
      {text}
    </Container>
  );
};

export default LinkButton;
