import { imag1 } from '@assets';
import { useInView } from 'react-intersection-observer';

import {
  ContainerSecond,
  ImgWrapperSecond,
  Border,
  Img,
} from './Photos.styles';

const SecondPhoto = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <ContainerSecond>
      <ImgWrapperSecond>
        <Img src={imag1} alt="H61" />
        <Border ref={ref} className={inView ? 'animate' : ''} />
      </ImgWrapperSecond>
    </ContainerSecond>
  );
};

export default SecondPhoto;
