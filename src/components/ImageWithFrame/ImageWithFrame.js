import { FrameImg1, HorizontalPhoto, Img1 } from './ImageWithFrame.style';

const ImageWithFrame = ({ src, alt }) => {
  return (
    <HorizontalPhoto>
      <FrameImg1 />
      <Img1 src={src} alt={alt} />
    </HorizontalPhoto>
  );
};

export default ImageWithFrame;
