import { imag1, imag2, imag3 } from '../../../../../../assets';

import {
  FrameImg1,
  FrameImg2,
  FrameImg3,
  Img1,
  Img2,
  Img3,
  Container,
  WrapperPhotos,
  WrapperSmallPhotos,
  HorizontalPhoto,
  WrapperBorders,
} from './Photos.styles';

// TODO:
// - alterar para function component
// - o alt deve descrever a imagem que está sendo exibida e não o nome da imagem
// lembrete: alterar titulo dos arquivos de imagem

function Photos() {
  return (
    // <Container>
    //   <WrapperPhoto>
    //     <FrameImg2 />
    //     <Img2 src={imag2} alt="H21" />
    //   </WrapperPhoto>

    //   <WrapperPhoto>
    //     <FrameImg3 />
    //     <Img3 src={imag3} alt="H61" />
    //   </WrapperPhoto>

    //   <WrapperPhoto>
    //     <FrameImg1 />
    //     <Img1 src={imag1} alt="DSC_0182" />
    //   </WrapperPhoto>
    // </Container>

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
}

export default Photos;
