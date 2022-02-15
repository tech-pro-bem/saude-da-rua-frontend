import styled from 'styled-components';

export const Container = styled.div`
  height: 705px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const WrapperPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  gap: 16px;
  position: static;
  left: 0;
  top: 0;
  margin-top: 51.1rem;
`;

export const Img1 = styled.img`
  display: flex;
  margin-top: 5px;
  width: 617px;
  height: 374px;
  margin-left: -615px;
`;

export const FrameImg1 = styled.div`
  display: flex;
  width: 609px;
  height: 366px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  box-sizing: border-box;
  border-radius: 12px;

  margin-left: -920px;
  margin-top: 30px;
`;

export const Img2 = styled.img`
  display: flex;
  margin-right: auto;
  width: 100%;
  max-width: 189px;
  margin-left: -195px;
  width: 197px;
  height: 280px;
  margin-top: 100px;
`;

export const FrameImg2 = styled.div`
  display: flex;
  width: 189px;
  height: 272px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  box-sizing: border-box;
  border-radius: 12px;
  margin-left: -220px;
  margin-top: 75px;
`;

export const Img3 = styled.img`
  display: flex;
  width: 420px;
  height: 280px;

  margin-right: auto;
  margin-left: -445px;
  margin-top: -285px;
`;

export const FrameImg3 = styled.div`
  display: flex;
  width: 412px;
  height: 272px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  box-sizing: border-box;
  border-radius: 12px;

  margin-left: 8px;
  margin-top: -310px;
`;
