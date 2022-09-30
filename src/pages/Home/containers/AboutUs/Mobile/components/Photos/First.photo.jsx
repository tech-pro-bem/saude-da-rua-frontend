import { imag3 } from '@assets';
import {
  Container,
  WrapperBorders,
  WrapperFirstPhotos,
  FrameImg3,
  WrapperPhoto,
  Img3,
} from './Photos.styles';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FirstPhoto = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container>
      <WrapperFirstPhotos>
        <WrapperBorders
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <FrameImg3 />
        </WrapperBorders>
        <WrapperPhoto>
          <Img3 src={imag3} alt="H61" />
        </WrapperPhoto>
      </WrapperFirstPhotos>
    </Container>
  );
};

export default FirstPhoto;
