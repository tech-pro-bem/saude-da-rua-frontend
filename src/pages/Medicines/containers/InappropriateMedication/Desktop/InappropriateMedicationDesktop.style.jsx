import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    margin-bottom: 29px;
  }

  p {
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
  }
  > :nth-child(1) {
    margin-right: 50px;
  }
`;
export const List = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Option = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => props.theme.colors.primary_light};
  margin-bottom: 34px;

  > :nth-child(1) {
    margin-right: 25px;
  }

  img {
    margin-top: 5px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
