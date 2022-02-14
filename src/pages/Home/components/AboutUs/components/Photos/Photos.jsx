import { imag1, imag2, imag3 } from '../../../../../../assets';

import {
  FrameImg1,
  FrameImg2,
  FrameImg3,
  Img1,
  Img2,
  Img3,
  Container,
  WrapperPhoto,
} from './Photos.styles';

const Photos = () => {
  return (
    <Container>
      <WrapperPhoto>
        <FrameImg2 />
        <Img2 src={imag2} alt="Fotos dos voluntários" />
      </WrapperPhoto>

      <WrapperPhoto>
        <FrameImg3 />
        <Img3 src={imag3} alt="Fotos dos voluntários" />
      </WrapperPhoto>

      <WrapperPhoto>
        <FrameImg1 />
        <Img1 src={imag1} alt="Fotos dos voluntários" />
      </WrapperPhoto>
    </Container>
  );
};

export default Photos;
