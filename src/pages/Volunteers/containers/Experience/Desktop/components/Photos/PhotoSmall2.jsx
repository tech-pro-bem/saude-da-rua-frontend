import { experience5 } from '@assets/volunteerPage';
import { OutlinedImageAnimation } from '@components';
import { useInView } from 'react-intersection-observer';

const PhotoSmall2 = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <OutlinedImageAnimation
      style={{ position: 'absolute', bottom: '-10px', left: '30px' }}
      height={'196px'}
      width={'240px'}
      outlineBorderRadius={'12px'}
      rightOffset={'none'}
      topOffset={'none'}
      leftOffset={'-8px'}
      bottomOffset={'-8px'}
      src={experience5}
      imgBorderRadius={'12px'}
      myRef={ref}
      inView={inView}
      animation={inView}
    />
  );
};

export default PhotoSmall2;
