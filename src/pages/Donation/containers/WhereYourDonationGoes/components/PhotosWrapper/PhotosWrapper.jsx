import { Container, LeftPhotos, RightPhoto } from './PhotosWrapper.style';
import {
  PhotoBig1,
  SecondPhotoBig,
  PhotoSmall1,
  SecondPhotoSmall,
} from '../Photos/index';

const PhotoWrapper = () => {
  return (
    <Container>
      <LeftPhotos>
        <PhotoBig1 />
        <PhotoSmall1 />
      </LeftPhotos>
      <RightPhoto>
        <SecondPhotoBig />
        <SecondPhotoSmall />
      </RightPhoto>
    </Container>
  );
};

export default PhotoWrapper;
