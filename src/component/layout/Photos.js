import imag1 from './../../img/DSC_0182.png';
import imag2 from './../../img/H21.png';
import imag3 from './../../img/H61.png';

import { FrameImg1, FrameImg2, FrameImg3 } from './styles';

import { Img1, Img2, Img3 } from './styles';

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
