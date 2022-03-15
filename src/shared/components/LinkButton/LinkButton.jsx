import { useNavigate } from 'react-router-dom';
import { Container } from './LinkButton.styles';

export const LinkButton = ({ text, route }) => {
  let history = useNavigate();

  return (
    <Container
      to={() => {
        history.push(`${route}`);
      }}
    >
      {text}
    </Container>
  );
};
