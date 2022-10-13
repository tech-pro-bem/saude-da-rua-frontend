import { howwilltheexpirence } from '@assets/volunteerPage';
import { OutlinedImageAnimation } from '@components';
import { useInView } from 'react-intersection-observer';

const PhotoHowTheExperience = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <OutlinedImageAnimation
      height={'213px'}
      outlineBorderRadius={'12px'}
      topOffset={'-8px'}
      leftOffset={'-15px'}
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
