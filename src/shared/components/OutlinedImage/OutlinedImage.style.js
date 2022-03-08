import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  width: ${({ width = 'auto' }) => width};
  height: ${({ height = 'auto' }) => height};
  z-index: 0;

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: ${({ topOffset = 0 }) => topOffset};
    bottom: ${({ bottomOffset = 0 }) => bottomOffset};
    left: ${({ rightOffset = 0 }) => rightOffset};
    right: ${({ leftOffset = 0 }) => leftOffset};
    border-radius: ${({ outlineBorderRadius = '8px' }) => outlineBorderRadius};
    border: ${({ borderWidth = '2px' }) => borderWidth} solid
      ${({ theme }) => theme.colors.primary};
    z-index: -1;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${({ imgBorderRadius = 0 }) => imgBorderRadius};
`;
