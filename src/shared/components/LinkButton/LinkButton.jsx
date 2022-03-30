import { Container } from './LinkButton.style';

export const LinkButton = ({ text, route }) => {
  return <Container to={route}>{text}</Container>;
};

export default LinkButton;
