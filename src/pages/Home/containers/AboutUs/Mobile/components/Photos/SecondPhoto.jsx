import { imag1 } from '@assets';
import { OutlinedImageAnimation } from '@components';
import { useInView } from 'react-intersection-observer';

const SecondPhoto = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  console.log('second: ', inView);
  return (
    <OutlinedImageAnimation
      outlineBorderRadius={'12px'}
      rightOffset={'none'}
      topOffset={'none'}
      leftOffset={'-8px'}
      bottomOffset={'-8px'}
      src={imag1}
      imgBorderRadius={'12px'}
      myRef={ref}
      inView={inView}
      animation={inView}
    />
  );
};

export default SecondPhoto;
