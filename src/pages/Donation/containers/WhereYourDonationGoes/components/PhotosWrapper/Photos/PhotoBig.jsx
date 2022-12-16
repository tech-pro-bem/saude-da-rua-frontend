import { PhotoBig } from '@assets/donationPage';
import { OutlinedImageAnimation } from '@components';
import { useInView } from 'react-intersection-observer';

const PhotoBig1 = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <OutlinedImageAnimation
      style={{
        position: 'absolute',
        top: '77px',
        right: '-110px',
        zIndex: '-1',
      }}
      outlineBorderRadius={'12px'}
      rightOffset={'-8px'}
      topOffset={'none'}
      leftOffset={'none'}
      bottomOffset={'-8px'}
      src={PhotoBig}
      imgBorderRadius={'12px'}
      myRef={ref}
      inView={inView}
      animation={inView}
    />
  );
};

export default PhotoBig1;
