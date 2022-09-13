import { imag1 } from '@assets';
import { Container, FrameImg1, HorizontalPhoto, Img1 } from './Photos.styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SecondPhoto = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container>
      <HorizontalPhoto>
        <FrameImg1
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        />
        <Img1 src={imag1} alt="H21" />
      </HorizontalPhoto>{' '}
    </Container>
  );
};

export default SecondPhoto;
