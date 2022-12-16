import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 72px;

  h1 {
    margin-bottom: 46px;
  }

  @media (max-width: 960px) {
    margin-bottom: 64px;
    h1 {
      font-size: 26px;
      line-height: 39px;
      margin-bottom: 24px;
    }
    p {
      font-size: 18px;
    }
  }
`;

export const StyledP = styled.p`
  font-size: 22px;
  margin-bottom: 48px;

  @media (max-width: 960px) {
    font-size: 18px;
    margin-bottom: 24px;
  }
`;
export const Reports = styled.div``;
