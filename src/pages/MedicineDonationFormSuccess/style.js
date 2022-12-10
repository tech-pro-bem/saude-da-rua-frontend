import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2.9rem;
  margin-bottom: 4.9rem;

  @media screen and (min-width: 768px) {
    margin-top: 11rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Head = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
  }

  & > img {
    margin-bottom: 1.56rem;
  }

  & > h1 {
    font-size: 2rem;
    line-height: 3rem;
    margin-bottom: 1.56rem;

    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
      line-height: 3.75rem;
    }
  }
`;

export const TextBox = styled.div`
  margin-bottom: 2.4rem;
  p {
    font-size: 1rem;
    line-height: 1.68rem;
    margin-bottom: 1.2rem;

    @media screen and (min-width: 768px) {
      text-align: center;
      margin-bottom: 4.18rem;
    }
  }
`;
