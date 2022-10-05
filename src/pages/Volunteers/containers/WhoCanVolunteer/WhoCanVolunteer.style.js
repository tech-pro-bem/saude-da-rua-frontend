import styled from 'styled-components';

export const WhoCanVolunteerMain = styled.main`
  color: #e9e9e9;

  .whocanHeader {
    text-align: center;

    h1 {
      margin: 1.5rem 0;
      span {
        color: #0095f6;
      }
    }
    @media (max-width: 640px) {
      text-align: initial;
      h1 {
        span {
          display: flex;
        }
      }
    }
  }

  .whocanBody {
    width: 100%;
    margin: 4rem auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

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
