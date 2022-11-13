import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2.5rem;

  @media screen and (min-width: 768px) {
    margin-top: 9.3rem;
  }

  h1 {
    font-size: 2rem;
    line-height: 3rem;
    margin-bottom: 1.5rem;

    @media screen and (min-width: 768px) {
      font-size: 3.25rem;
      text-align: center;
      margin-bottom: 5.5rem;
    }
  }

  p {
    font-size: 1.125rem;
    line-height: 1.6875rem;
    margin-bottom: 1.6rem;

    @media screen and (min-width: 768px) {
      font-size: 1.375rem;
      text-align: center;
      margin-bottom: 1.36rem;
    }
  }
`;
