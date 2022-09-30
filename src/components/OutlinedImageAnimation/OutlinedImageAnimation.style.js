import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom};
`;

export const Box = styled.div`
  position: relative;
  display: flex;

  ::after {
    content: '';
    position: absolute;
    top: ${({ topOffset = 0 }) => topOffset};
    right: ${({ rightOffset = 0 }) => rightOffset};
    left: ${({ leftOffset = 0 }) => leftOffset};
    bottom: ${({ bottomOffset = 0 }) => bottomOffset};
    border-radius: ${({ outlineBorderRadius = '8px' }) => outlineBorderRadius};
    border: ${({ borderWidth = '2px' }) => borderWidth} solid
      ${({ theme }) => theme.colors.primary};

    animation: ${({ animation = 'none' }) => `${animation} 4s forwards`};
  }
  .animate {
    @keyframes true {
      0% {
        border: 2px solid ${(props) => props.theme.colors.primary};
        width: 0px;
        height: 0px;
      }

      100% {
        border: 2px solid ${(props) => props.theme.colors.primary};
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  border-radius: ${({ imgBorderRadius = 0 }) => imgBorderRadius};
  z-index: 2;
`;
