import { partnersLogo } from '../../../../assets';
import { Container, PostionedOutlinedImage } from './Gallery.style';

const Gallery = () => {
  return (
    <Container>
      <PostionedOutlinedImage left="0" top="0" src={partnersLogo} />
      <PostionedOutlinedImage top="50px" left="50%" src={partnersLogo} />
      <PostionedOutlinedImage
        bottom="50%"
        left="50%"
        transform="translate(-40%, 40%)"
        src={partnersLogo}
      />
      <PostionedOutlinedImage bottom="0" right="0" src={partnersLogo} />
    </Container>
  );
};

export default Gallery;
