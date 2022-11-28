import { PhotoSmall2 } from '@assets/donationPage';
import { OutlinedImageAnimation } from '@components';
import { useInView } from 'react-intersection-observer';

const SecondPhotoSmall = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <OutlinedImageAnimation
      style={{ position: 'absolute', top: '220px', right: '-100px' }}
      outlineBorderRadius={'12px'}
      rightOffset={'none'}
      topOffset={'none'}
      leftOffset={'-8px'}
      bottomOffset={'-8px'}
      src={PhotoSmall2}
      imgBorderRadius={'12px'}
      myRef={ref}
      inView={inView}
      animation={inView}
    />
  );
};

export default SecondPhotoSmall;
