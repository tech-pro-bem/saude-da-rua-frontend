import { Container, Author, Quote } from './Quotation.style';

const QuotationComponent = ({ text, author, margin, width, maxWidth }) => {
  return (
    <Container margin={margin} width={width} maxWidth={maxWidth}>
      <Quote>{text}</Quote>
      <Author>{author}</Author>
    </Container>
  );
};

export default QuotationComponent;
