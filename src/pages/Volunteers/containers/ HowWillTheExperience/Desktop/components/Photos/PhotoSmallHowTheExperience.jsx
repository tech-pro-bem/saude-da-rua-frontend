import { howwilltheexpirence3 } from '@assets/volunteerPage';
import { OutlinedImageAnimation } from '@components';
import { useInView } from 'react-intersection-observer';

const PhotoSmallHowTheExperience = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <OutlinedImageAnimation
      height={'278px'}
      width={'139px'}
      outlineBorderRadius={'12px'}
      topOffset={'-8px'}
      leftOffset={'-12px'}
      bottomOffset={'-8px'}
      src={howwilltheexpirence3}
      imgBorderRadius={'12px'}
      myRef={ref}
      inView={inView}
      animation={inView}
    />
  );
};

export default PhotoSmallHowTheExperience;
