import styled from 'styled-components';

export const Container = styled.div`
  width: 627px;
  height: 662px;

  display: flex;
`;

export const WrapperPhoto = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`;

export const Img1 = styled.img`
  display: block;

  max-width: 609px;

  width: 100%;
  height: 50%;
`;

export const FrameImg1 = styled.div`
  width: 609px;
  height: 366px;

  border: 2px solid ${(props) => props.theme.colors.primary};
  box-sizing: border-box;
  border-radius: 12px;

  position: relative;
  top: 380px;
  right: 10px;
`;

export const Img2 = styled.img`
  display: block;
  width: 100%;

  width: 197px;
  height: 280px;
`;

export const FrameImg2 = styled.img`
  width: 189px;
  height: 272px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  box-sizing: border-box;
  border-radius: 12px;
`;

export const Img3 = styled.img`
  display: block;
  margin-right: 100vh;
  width: 100%;
  max-width: 420px;
  top: 100px;

  height: 280px;
`;

export const FrameImg3 = styled.img`
  width: 412px;
  height: 272px;

  border: 2px solid ${(props) => props.theme.colors.primary};
  box-sizing: border-box;
  border-radius: 12px;
`;
