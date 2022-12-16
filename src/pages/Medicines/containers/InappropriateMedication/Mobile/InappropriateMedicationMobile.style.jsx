import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    margin: 0px 0 30px 0px;
  }
`;
export const List = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin: 24px 0px 40px 0px; */
`;

export const Option = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => props.theme.colors.primary_light};
  margin-bottom: 24px;

  > :nth-child(1) {
    margin-right: 25px;
  }

  img {
    margin-top: 5px;
  }
`;
