import { Container, Author } from './Quote.style';

const QuotationComponent = ({ text, author, margin, width, maxWidth }) => {
  return (
    <Container margin={margin} width={width} maxWidth={maxWidth}>
      <p className="big">{text}</p>
      <Author>{author}</Author>
    </Container>
  );
};

export default QuotationComponent;
