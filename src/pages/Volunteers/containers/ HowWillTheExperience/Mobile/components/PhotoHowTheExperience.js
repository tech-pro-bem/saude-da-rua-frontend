import { howwilltheexpirence } from '@assets/volunteerPage';
import { OutlinedImageAnimation } from '@components';
import { useInView } from 'react-intersection-observer';

const PhotoHowTheExperience = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <OutlinedImageAnimation
      height={'213px'}
      outlineBorderRadius={'12px'}
      rightOffset={'-8px'}
      topOffset={'-8px'}
      leftOffset={'none'}
      bottomOffset={'none'}
      src={howwilltheexpirence}
      imgBorderRadius={'12px'}
      myRef={ref}
      inView={inView}
      animation={inView}
    />
  );
};

export default PhotoHowTheExperience;
