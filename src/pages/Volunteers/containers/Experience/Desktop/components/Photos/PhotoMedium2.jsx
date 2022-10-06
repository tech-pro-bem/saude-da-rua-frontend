import { experience3 } from '@assets/volunteerPage';
import { OutlinedImageAnimation } from '@components';
import { useInView } from 'react-intersection-observer';

const PhotoMedium2 = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <OutlinedImageAnimation
      style={{ position: 'absolute', bottom: '0px', right: '0px', zIndex: '0' }}
      height={'321px'}
      width={'398px'}
      outlineBorderRadius={'12px'}
      rightOffset={'-8px'}
      topOffset={'none'}
      leftOffset={'none'}
      bottomOffset={'-8px'}
      src={experience3}
      imgBorderRadius={'12px'}
      myRef={ref}
      inView={inView}
      animation={inView}
    />
  );
};

export default PhotoMedium2;
