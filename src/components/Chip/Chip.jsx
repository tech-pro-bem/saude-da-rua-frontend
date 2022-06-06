import { Container } from './Chip.style';

const Chip = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Chip;
