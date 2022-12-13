import { howwilltheexpirence } from '@assets/volunteerPage';
import { OutlinedImageAnimation } from '@components';
import { useInView } from 'react-intersection-observer';
import { useMedia } from '@hooks';

const PhotoHowTheExperience = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const mobile = useMedia('(max-width:500px)');

  return (
    <OutlinedImageAnimation
      height={mobile ? '213px' : '300px'}
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
