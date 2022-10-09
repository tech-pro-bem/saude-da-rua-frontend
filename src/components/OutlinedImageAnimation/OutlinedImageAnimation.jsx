import { Box, StyledImage, Container } from './OutlinedImageAnimation.style';

const OutlinedImageAnimation = ({
  width,
  height,
  borderWidth,
  outlineBorderRadius,
  leftOffset,
  rightOffset,
  topOffset,
  bottomOffset,
  imgBorderRadius,
  style,
  animation,
  marginBottom,
  src,
  myRef,
  inView,
}) => {
  return (
    <Container marginBottom={marginBottom}>
      <Box
        width={width}
        height={height}
        borderWidth={borderWidth}
        outlineBorderRadius={outlineBorderRadius}
        rightOffset={rightOffset}
        topOffset={topOffset}
        leftOffset={leftOffset}
        bottomOffset={bottomOffset}
        style={style}
        animation={animation}
      >
        <StyledImage
          src={src}
          imgBorderRadius={imgBorderRadius}
          ref={myRef}
          className={inView ? 'animate' : ''}
        />
      </Box>
    </Container>
  );
};

export default OutlinedImageAnimation;
