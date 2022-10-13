import styled from 'styled-components';

export const HorizontalPhoto = styled.div`
  height: 50%;
  width: 100%;

  display: flex;
  flex-direction: column;
  flex: 1;

  position: relative;
  margin-top: 16px;
`;

export const Img1 = styled.img`
  display: block;
  width: 99%;

  z-index: 9;
  margin-left: 8px;
`;

export const FrameImg1 = styled.div`
  width: 100%;
  max-width: 630px;
  height: 170%;

  border: 3px solid ${(props) => props.theme.colors.primary};
  border-radius: 12px;

  position: absolute;
  top: -1rem;
  left: 0;
`;
