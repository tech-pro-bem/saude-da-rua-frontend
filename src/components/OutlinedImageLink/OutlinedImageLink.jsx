import { Box, StyledImage } from './OutlinedImageLink.style';

const OutlinedImageLink = ({
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
  target,
  href,
  rel,
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
      <a target={target} href={href} rel={rel}>
        <StyledImage
          imgWidth={imgWidth}
          imgHeight={imgHeight}
          imgBorderRadius={imgBorderRadius}
          {...rest}
        />
      </a>
    </Box>
  );
};

export default OutlinedImageLink;
