import { WantToContinueContributed3 } from '@assets/medicamentPage';
import { OutlinedImageAnimation } from '@components';
import { useInView } from 'react-intersection-observer';

const PhotoBigWantToContinueContributed = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <OutlinedImageAnimation
      height={'379px'}
      width={'585px'}
      outlineBorderRadius={'12px'}
      leftOffset={'-8px'}
      topOffset={'5px'}
      src={WantToContinueContributed3}
      imgBorderRadius={'12px'}
      myRef={ref}
      inView={inView}
      animation={inView}
    />
  );
};

export default PhotoBigWantToContinueContributed;
