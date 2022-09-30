import { imag3 } from '@assets';
import { OutlinedImageAnimation } from '@components';
import { useInView } from 'react-intersection-observer';

const FirstPhoto = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <OutlinedImageAnimation
      outlineBorderRadius={'12px'}
      rightOffset={'-8px'}
      topOffset={'-8px'}
      leftOffset={'none'}
      bottomOffset={'none'}
      src={imag3}
      imgBorderRadius={'12px'}
      marginBottom={'24px'}
      myRef={ref}
      inView={inView}
      animation={inView}
    />
  );
};

export default FirstPhoto;
