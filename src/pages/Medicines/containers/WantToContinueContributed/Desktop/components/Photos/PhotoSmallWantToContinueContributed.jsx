import { WantToContinueContributed } from '@assets/medicamentPage';
import { OutlinedImageAnimation } from '@components';
import { useInView } from 'react-intersection-observer';

const PhotoSmallWantToContinueContributed = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <OutlinedImageAnimation
      height={'278px'}
      width={'189px'}
      outlineBorderRadius={'12px'}
      topOffset={'-8px'}
      leftOffset={'-12px'}
      bottomOffset={'-8px'}
      src={WantToContinueContributed}
      imgBorderRadius={'12px'}
      myRef={ref}
      inView={inView}
      animation={inView}
    />
  );
};

export default PhotoSmallWantToContinueContributed;
