import { WantToContinueContributed2 } from '@assets/medicamentPage';
import { OutlinedImageAnimation } from '@components';
import { useInView } from 'react-intersection-observer';

const PhotoMediumWantToContinueContributed = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <OutlinedImageAnimation
      height={'275px'}
      width={'382px'}
      outlineBorderRadius={'12px'}
      rightOffset={'-8px'}
      topOffset={'-8px'}
      leftOffset={'none'}
      bottomOffset={'none'}
      src={WantToContinueContributed2}
      imgBorderRadius={'12px'}
      myRef={ref}
      inView={inView}
      animation={inView}
    />
  );
};

export default PhotoMediumWantToContinueContributed;
