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
    right: ${({ rightOffset = 0 }) => rightOffset};
    left: ${({ leftOffset = 0 }) => leftOffset};
    border-radius: ${({ outlineBorderRadius = '8px' }) => outlineBorderRadius};
    border: ${({ borderWidth = '2px' }) => borderWidth} solid
      ${({ theme }) => theme.colors.primary};
    z-index: -1;

    @media screen and (max-width: ${({ responsive }) => responsive.maxWidth}) {
      border-radius: ${({ responsive }) => responsive.borderRadius};
      left: ${({ responsive }) => responsive.left};
      right: ${({ responsive }) => responsive.right};
      bottom: ${({ responsive }) => responsive.bottom};
      top: ${({ responsive }) => responsive.top};
    }
  }
`;

export const StyledImage = styled.img`
  width: ${({ imgWidth = 'auto' }) => imgWidth};
  height: ${({ imgHeight = 'auto' }) => imgHeight};
  max-width: 100%;
  max-height: 100%;
  border-radius: ${({ imgBorderRadius = 0 }) => imgBorderRadius};
`;
