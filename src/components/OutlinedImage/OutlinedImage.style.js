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

    @media screen and (max-width: 520px) {
      border-radius: 12px;
      left: 7px;
      right: -7px;
      bottom: 14px;
      top: -7px;
    }
  }
`;

export const StyledImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: ${({ imgBorderRadius = 0 }) => imgBorderRadius};

  @media screen and (max-width: 520px) {
    width: 321px;
    height: 216px;
    max-width: 100%;
    max-height: 100%;
    border-radius: 12px;
  }
`;
