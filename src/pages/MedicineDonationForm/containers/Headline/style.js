import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.4rem;

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
      margin-bottom: 2.5rem;
    }
  }
`;

export const TextBox = styled.div`
  max-width: 720px;
  margin: 0 auto;

  p {
    font-size: 1.125rem;
    line-height: 1.6875rem;
    margin-bottom: 1.6rem;
    padding-right: 0.35rem;

    @media screen and (min-width: 768px) {
      font-size: 1.375rem;
      margin-bottom: 1.36rem;
    }
  }

  ul li {
    display: flex;
    align-items: flex-start;
    gap: 25px;

    img {
      padding-top: 0.5rem;
      padding-left: 0.375rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
