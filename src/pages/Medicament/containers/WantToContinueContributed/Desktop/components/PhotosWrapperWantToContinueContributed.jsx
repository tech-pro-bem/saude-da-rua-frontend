import { PhotoBigWantToContinueContributed } from './Photos';
import PhotoMediumWantToContinueContributed from './Photos/PhotoMediumWantToContinueContributed';
import PhotoSmallWantToContinueContributed from './Photos/PhotoSmallWantToContinueContributed';
import {
  Container,
  TopPhotos,
} from './PhotosWrapperHowTheWillExperience.style';

const PhotosWrapperWantToContinueContributed = () => {
  return (
    <Container>
      <TopPhotos>
        <PhotoSmallWantToContinueContributed />
        <PhotoMediumWantToContinueContributed />
      </TopPhotos>

      <PhotoBigWantToContinueContributed />
    </Container>
  );
};

export default PhotosWrapperWantToContinueContributed;
