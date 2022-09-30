import { imag3 } from '@assets';
import { useInView } from 'react-intersection-observer';
import { ContainerFirst, ImgWrapperFirst, Border, Img } from './Photos.styles';

const FirstPhoto = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <ContainerFirst>
      <ImgWrapperFirst>
        <Img src={imag3} alt="H61" />
        <Border ref={ref} className={inView ? 'animate' : ''} />
      </ImgWrapperFirst>
    </ContainerFirst>
  );
};

export default FirstPhoto;
