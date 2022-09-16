import styled from 'styled-components';

export const ContainerFirst = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const ImgWrapperFirst = styled.div`
  position: relative;
  display: flex;

  .animate {
    ::after {
      border-radius: 15px;
      content: '';
      top: -8px;
      right: -8px;
      position: absolute;

      animation: border-flow 4s forwards;
    }

    @keyframes border-flow {
      0% {
        border: 2px solid ${(props) => props.theme.colors.primary};
        width: 0px;
        height: 0px;
      }

      95% {
        border: 2px solid ${(props) => props.theme.colors.primary};
        width: 100%;
        height: 100%;
      }
      100% {
        border: 0px;
      }
    }
  }
`;
export const Border = styled.div``;
export const Img = styled.img`
  border-radius: 12px;
  z-index: 2;
  width: 100%;
`;

export const ContainerSecond = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const ImgWrapperSecond = styled.div`
  position: relative;
  display: flex;

  .animate {
    ::after {
      border-radius: 15px;
      content: '';
      bottom: -8px;
      left: -8px;
      position: absolute;
      animation: border-flow 4s forwards;
      animation-iteration-count: 1;
    }

    @keyframes border-flow {
      0% {
        border: 0px solid ${(props) => props.theme.colors.primary};
        width: 0px;
        height: 0px;
      }

      75% {
        border: 2px solid ${(props) => props.theme.colors.primary};
        width: 100%;
        height: 100%;
      }
      100% {
        border: 0px;
      }
    }
  }
`;
