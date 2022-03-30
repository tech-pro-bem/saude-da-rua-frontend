import { imag1, imag2, imag3 } from '../../../../../../assets';
import {
  Container,
  WrapperBorders,
  WrapperSmallPhotos,
  FrameImg1,
  FrameImg2,
  FrameImg3,
  WrapperPhotos,
  HorizontalPhoto,
  Img1,
  Img2,
  Img3,
} from './Photos.styles';

const Photos = () => {
  return (
    <Container>
      <WrapperSmallPhotos>
        <WrapperBorders>
          <FrameImg2 />
          <FrameImg3 />
        </WrapperBorders>
        <WrapperPhotos>
          <Img2 src={imag2} alt="H21" />
          <Img3 src={imag3} alt="H61" />
        </WrapperPhotos>
      </WrapperSmallPhotos>
      <HorizontalPhoto>
        <FrameImg1 />
        <Img1 src={imag1} alt="H21" />
      </HorizontalPhoto>{' '}
    </Container>
  );
};

export default Photos;
