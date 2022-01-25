import styled from 'styled-components';

export const Container = styled.div`
  //  width: 627px;
  // height: 662px;
  //display: flex;

  //teste git
  height: 705px;
`;

export const WrapperPhoto = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  //teste
  flex: 1;
  gap: 16px;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Img1 = styled.img`
  display: ruby;
  margin-top: 388px;
  align-items: flex-end;
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
  margin-left: 115px;
  margin-top: 410px;
`;

export const Img2 = styled.img`
  display: ruby;
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
  margin-left: 115px;
  margin-top: 75px;
`;

export const Img3 = styled.img`
  display: ruby;
  // margin-right: 100vh;
  width: 420px;
  margin-top: 100px;
  margin-left: -444px;
  height: 280px;
`;

export const FrameImg3 = styled.div`
  display: flex;
  width: 412px;
  height: 272px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  box-sizing: border-box;
  border-radius: 12px;
  margin-left: 339px;
  margin-top: 75px;
`;
