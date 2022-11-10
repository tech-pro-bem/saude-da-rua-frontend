import { experience2 } from '@assets/volunteerPage';
import { OutlinedImageAnimation } from '@components';
import { useInView } from 'react-intersection-observer';

const PhotoBig = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <OutlinedImageAnimation
      height={'529.33px'}
      width={'397px'}
      outlineBorderRadius={'12px'}
      rightOffset={'-8px'}
      topOffset={'-8px'}
      leftOffset={'none'}
      bottomOffset={'none'}
      src={experience2}
      imgBorderRadius={'12px'}
      myRef={ref}
      inView={inView}
      animation={inView}
    />
  );
};

export default PhotoBig;
