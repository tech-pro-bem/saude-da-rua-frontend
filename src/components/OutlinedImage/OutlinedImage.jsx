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
      style={style}
      className={className}
    >
      <StyledImage imgBorderRadius={imgBorderRadius} {...rest} />
    </Box>
  );
};

export default OutlinedImage;
