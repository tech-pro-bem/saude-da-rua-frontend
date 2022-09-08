import { imag3 } from '@assets';
import {
  Container,
  WrapperBorders,
  WrapperSmallPhotos,
  FrameImg3,
  WrapperPhotos,
  Img3,
} from './Photos.styles';

const FirstPhoto = () => {
  return (
    <Container>
      <WrapperSmallPhotos>
        <WrapperBorders>
          <FrameImg3 />
        </WrapperBorders>
        <WrapperPhotos>
          <Img3 src={imag3} alt="H61" />
        </WrapperPhotos>
      </WrapperSmallPhotos>
    </Container>
  );
};

export default FirstPhoto;
