import { PhotoSmallHowTheExperience } from './Photos';
import PhotoBigHowTheExperience from './Photos/PhotoBigHowTheExperience';
import PhotoMediumHowTheExperience from './Photos/PhotoMediumHowTheExperience';
import {
  Container,
  TopPhotos,
} from './PhotosWrapperHowTheWillExperience.style';

const PhotosWrapperHowTheExperience = () => {
  return (
    <Container>
      <TopPhotos>
        <PhotoSmallHowTheExperience />
        <PhotoMediumHowTheExperience />
      </TopPhotos>

      <PhotoBigHowTheExperience />
    </Container>
  );
};

export default PhotosWrapperHowTheExperience;
