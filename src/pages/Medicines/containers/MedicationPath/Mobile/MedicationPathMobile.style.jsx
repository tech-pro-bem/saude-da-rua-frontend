import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
  }
`;
export const List = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 270px;
  margin: 24px 0px 40px 0px;
`;

export const Path = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #e9e9e9;

  > :nth-child(1) {
    margin-right: 5px;
  }
`;
