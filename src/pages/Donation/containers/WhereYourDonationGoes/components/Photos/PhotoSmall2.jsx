import { PhotoSmall2 } from '@assets/donationPage';
import { OutlinedImageAnimation } from '@components';
import { useInView } from 'react-intersection-observer';

const SecondPhotoSmall = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <OutlinedImageAnimation
      style={{ position: 'absolute', top: '0px', right: '43px' }}
      height={'186px'}
      width={'202px'}
      outlineBorderRadius={'12px'}
      rightOffset={'-8px'}
      topOffset={'-8px'}
      leftOffset={'none'}
      bottomOffset={'none'}
      src={PhotoSmall2}
      imgBorderRadius={'12px'}
      myRef={ref}
      inView={inView}
      animation={inView}
    />
  );
};

export default SecondPhotoSmall;
