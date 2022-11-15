import { experience } from '@assets/volunteerPage';
import { OutlinedImageAnimation } from '@components';
import { useInView } from 'react-intersection-observer';

const PhotoMedium1 = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <OutlinedImageAnimation
      style={{ position: 'absolute', top: '0px', left: '-55px' }}
      height={'321px'}
      width={'398px'}
      outlineBorderRadius={'12px'}
      rightOffset={'-8px'}
      topOffset={'-8px'}
      leftOffset={'none'}
      bottomOffset={'none'}
      src={experience}
      imgBorderRadius={'12px'}
      myRef={ref}
      inView={inView}
      animation={inView}
    />
  );
};

export default PhotoMedium1;
