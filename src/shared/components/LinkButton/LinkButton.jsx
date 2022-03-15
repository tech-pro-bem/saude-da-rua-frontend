import { Container } from './LinkButton.styles';

export const LinkButton = ({ text, route }) => {
  return <Container to={route}>{text}</Container>;
};
