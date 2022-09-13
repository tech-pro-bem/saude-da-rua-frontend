import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const WrapperFirstPhotos = styled.div`
  height: 50%;
  width: 100%;

  display: flex;
  flex-direction: column;
  flex: 1;

  position: relative;
`;

export const WrapperBorders = styled.div`
  display: flex;
  flex: 1;
  gap: 16px;

  position: absolute;
  left: 8px;
  top: 0;
`;

export const WrapperPhoto = styled.div`
  display: flex;
  flex: 1;
  gap: 16px;

  z-index: 9;
  margin-top: 8px;
  margin-right: 8px;
`;

export const Img2 = styled.img`
  display: block;

  width: 197px;
  height: 280px;
`;

export const FrameImg2 = styled.div`
  display: block;
  width: 197px;
  height: 280px;
  background: ${(props) => props.theme.colors.blackUI};
  backdrop-filter: blur(0px);
  vertical-align: bottom;

  border-radius: 12px;
  border: 2px solid ${(props) => props.theme.colors.primary};
`;

export const Img3 = styled.img`
  display: block;

  width: 320px;
  height: 216px;
`;

export const FrameImg3 = styled.div`
  width: 320px;
  height: 216px;

  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 12px;
`;

export const HorizontalPhoto = styled.div`
  height: 50%;
  width: 100%;

  display: flex;
  flex-direction: column;
  flex: 1;

  position: relative;
  margin-top: 24px;
`;

export const Img1 = styled.img`
  display: block;
  width: 320px;
  height: 216px;

  z-index: 9;
  margin-left: 8px;
`;

export const FrameImg1 = styled.div`
  width: 320px;
  height: 216px;

  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 12px;

  position: absolute;
  top: 8px;
  left: 0;
`;
