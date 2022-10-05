import PhotoBig from './Photos/PhotoBig';
import { Container, LeftPhotos, RightPhoto } from './PhotosWrapper.style';

const PhotoWrapper = () => {
  return (
    <Container>
      <LeftPhotos></LeftPhotos>
      <RightPhoto>
        <PhotoBig />
      </RightPhoto>
    </Container>
  );
};

export default PhotoWrapper;
