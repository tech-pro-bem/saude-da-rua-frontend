import styled from 'styled-components';

export const WhoCanVolunteerMain = styled.main`
  color: #e9e9e9;

  .whocanHeader {
    text-align: center;

    h1 {
      margin: 1.5rem 0;
      font-size: 2.5rem;
      span {
        color: #0095f6;
      }
      @media (max-width: 640px) {
        span {
          display: flex;
        }
      }
    }

    p {
      @media (max-width: 640px) {
        span {
          display: flex;
        }
      }
    }
    @media (max-width: 640px) {
      text-align: initial;
      h1 {
        font-size: 1.625rem;
        display: block;
        width: 100%;
      }
    }
  }

  .whocanBody {
    width: 100%;
    margin: 36px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    .whocanBodyChildren {
      display: grid;
      gap: 1rem;
      img {
        display: block;
        margin: 0 auto;
      }
      h4 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 24px;
        text-align: center;
        color: #e9e9e9;
      }
    }

    @media (max-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
