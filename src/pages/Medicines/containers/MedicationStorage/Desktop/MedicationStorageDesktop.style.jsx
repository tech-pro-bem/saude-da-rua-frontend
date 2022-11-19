import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Data = styled.div`
  width: 60%;
  margin-left: 32px;
  h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
  }
`;

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 231px;
`;

export const Path = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  color: #e9e9e9;
  > :nth-child(1) {
    margin-right: 5px;
  }
`;
