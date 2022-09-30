import { Box, StyledImage } from './OutlinedImage.style';

const OutlinedImage = ({
  width,
  height,
  borderWidth,
  outlineBorderRadius,
  leftOffset,
  rightOffset,
  topOffset,
  bottomOffset,
  imgBorderRadius,
  imgWidth,
  imgHeight,
  responsive,
  style,
  className,
  ...rest
}) => {
  return (
    <Box
      width={width}
      height={height}
      borderWidth={borderWidth}
      outlineBorderRadius={outlineBorderRadius}
      leftOffset={leftOffset}
      rightOffset={rightOffset}
      topOffset={topOffset}
      bottomOffset={bottomOffset}
      responsive={{ ...responsive }}
      style={style}
      className={className}
    >
      <StyledImage
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        imgBorderRadius={imgBorderRadius}
        {...rest}
      />
    </Box>
  );
};

export default OutlinedImage;
