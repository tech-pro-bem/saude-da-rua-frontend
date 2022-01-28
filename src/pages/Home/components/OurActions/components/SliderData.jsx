import Carousel, { CarouselItem } from './Carousel';
import { Container } from './Carousel.style';

const SliderData = () => (
  <Container>
    <Carousel>
      <CarouselItem>Teste</CarouselItem>
      <CarouselItem>Item 2</CarouselItem>
      <CarouselItem>Item 3</CarouselItem>
    </Carousel>
  </Container>
);

export default SliderData;
