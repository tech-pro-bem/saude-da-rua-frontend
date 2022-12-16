import { imag1, imag2, imag3 } from '@assets';
import { OutlinedImageAnimation } from '@components';
import { useInView } from 'react-intersection-observer';
import {
  Container,
  WrapperSmallPhotos,
  HorizontalPhoto,
} from './Photos.styles';

const Photos = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <Container>
      <WrapperSmallPhotos>
        <OutlinedImageAnimation
          outlineBorderRadius={'12px'}
          rightOffset={'none'}
          topOffset={'-8px'}
          leftOffset={'-8px'}
          bottomOffset={'none'}
          src={imag2}
          imgBorderRadius={'12px'}
          marginBottom={'8px'}
          myRef={ref}
          inView={inView}
          animation={inView}
        />
        <OutlinedImageAnimation
          outlineBorderRadius={'12px'}
          rightOffset={'-8px'}
          topOffset={'-8px'}
          leftOffset={'none'}
          bottomOffset={'none'}
          src={imag3}
          imgBorderRadius={'12px'}
          marginBottom={'none'}
          myRef={ref}
          inView={inView}
          animation={inView}
        />
      </WrapperSmallPhotos>
      <HorizontalPhoto>
        <OutlinedImageAnimation
          outlineBorderRadius={'12px'}
          rightOffset={'none'}
          topOffset={'none'}
          leftOffset={'-8px'}
          bottomOffset={'-8px'}
          src={imag1}
          imgBorderRadius={'12px'}
          myRef={ref}
          inView={inView}
          animation={inView}
        />
      </HorizontalPhoto>{' '}
    </Container>
  );
};

export default Photos;
