import { Container, LeftPhotos, RightPhoto } from './PhotosWrapper.style';
import {
  PhotoBig,
  PhotoMedium1,
  PhotoMedium2,
  PhotoSmall1,
  PhotoSmall2,
} from './Photos/index';

const PhotoWrapper = () => {
  return (
    <Container>
      <LeftPhotos>
        <PhotoMedium1 />
        <PhotoSmall1 />
        <PhotoSmall2 />
        <PhotoMedium2 />
      </LeftPhotos>
      <RightPhoto>
        <PhotoBig />
      </RightPhoto>
    </Container>
  );
};

export default PhotoWrapper;
