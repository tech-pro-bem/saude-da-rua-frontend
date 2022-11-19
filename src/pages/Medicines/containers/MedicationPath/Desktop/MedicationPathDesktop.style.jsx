import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 80px;
`;
export const Data = styled.div`
  margin-left: 32px;
  width: 60%;
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
`;

export const Path = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  color: #e9e9e9;
  margin-top: 15px;
  > :nth-child(1) {
    margin-right: 5px;
  }
`;
