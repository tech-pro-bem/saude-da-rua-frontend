import {
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
} from '@assets/donationPage';
import { Container, PostionedOutlinedImage } from './Gallery.style';

const Gallery = ({ mobile }) => {
  return (
    <Container>
      {!mobile && (
        <>
          <PostionedOutlinedImage
            gridRow="1/3"
            gridColumn="1/3"
            src={galleryImg1}
            topOffset="-8px"
            leftOffset="-8px"
            rightOffset="8px"
            bottomOffset="16px"
          />
          <PostionedOutlinedImage
            gridRow="1/3"
            gridColumn="3/5"
            src={galleryImg2}
            topOffset="-8px"
            leftOffset="-8px"
            rightOffset="8px"
            bottomOffset="16px"
          />
          <PostionedOutlinedImage
            gridRow="1/4"
            gridColumn="5/7"
            src={galleryImg3}
            topOffset="-8px"
            leftOffset="-8px"
            rightOffset="8px"
            bottomOffset="16px"
          />
          <PostionedOutlinedImage
            gridRow="3/4"
            gridColumn="1/3"
            src={galleryImg4}
            topOffset="8px"
            leftOffset="8px"
            rightOffset="-8px"
            bottomOffset="-4px"
          />
        </>
      )}

      <PostionedOutlinedImage
        gridRow="2/4"
        gridColumn="2/5"
        justify="end"
        align="end"
        src={galleryImg5}
        topOffset="8px"
        leftOffset="-8px"
        rightOffset="8px"
        bottomOffset="8px"
      />
    </Container>
  );
};

export default Gallery;
