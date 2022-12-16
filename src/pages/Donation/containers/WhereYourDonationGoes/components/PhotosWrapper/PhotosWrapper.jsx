import { Container, LeftPhotos, RightPhoto } from './PhotosWrapper.style';
import { Photo1, Photo2, Photo3, Photo4 } from './Photos/index';

const PhotoWrapper = () => {
  return (
    <Container>
      <LeftPhotos>
        <Photo2 />
        <Photo4 />
      </LeftPhotos>
      <RightPhoto>
        <Photo1 />
        <Photo3 />
      </RightPhoto>
    </Container>
  );
};

export default PhotoWrapper;
