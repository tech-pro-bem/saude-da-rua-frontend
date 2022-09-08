import { imag1 } from '@assets';
import { Container, FrameImg1, HorizontalPhoto, Img1 } from './Photos.styles';

const SecondPhoto = () => {
  return (
    <Container>
      <HorizontalPhoto>
        <FrameImg1 />
        <Img1 src={imag1} alt="H21" />
      </HorizontalPhoto>{' '}
    </Container>
  );
};

export default SecondPhoto;
