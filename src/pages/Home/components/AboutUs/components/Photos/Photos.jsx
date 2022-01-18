import { imag1, imag2, imag3 } from '../../../../../../assets';
import {
  FrameImg1,
  FrameImg2,
  FrameImg3,
  Img1,
  Img2,
  Img3,
} from './Photos.styles';

function Photos() {
  return (
    <>
      <FrameImg1 />
      <Img1 src={imag1} alt="DSC_0182" />

      <FrameImg2 />
      <Img2 src={imag2} alt="H21" />
      <FrameImg3 />
      <Img3 src={imag3} alt="H61" />
    </>
  );
}

export default Photos;
