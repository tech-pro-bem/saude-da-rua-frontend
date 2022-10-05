import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 72px auto 36px auto;

  .first {
    font-weight: 700;
    font-size: 26px;
    color: ${(props) => props.theme.colors.primary_light};
    margin: 28px 0px 24px 0px;
  }
  p {
    margin-bottom: 46.5px;
  }
`;
