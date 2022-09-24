import styled from 'styled-components';

export const Container = styled.div`
  width: 636px;
  height: 100%;
`;

export const WrapperSmallPhotos = styled.div`
  height: 50%;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;

  position: relative;
`;

export const HorizontalPhoto = styled.div`
  height: 50%;
  width: 100%;

  display: flex;
  flex-direction: column;
  flex: 1;

  position: relative;
  margin-top: 16px;
`;
