import { Container } from './Quotation.style';

const QuotationComponent = ({ text, author, margin, width, maxWidth }) => {
  return (
    <Container margin={margin} width={width} maxWidth={maxWidth}>
      <p className="Quote">{text}</p>
      <h3 className="Author">{author}</h3>
    </Container>
  );
};

export default QuotationComponent;
