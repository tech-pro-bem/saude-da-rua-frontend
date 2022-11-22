import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: 'Poppins';
  font-size: 52px;

  @media (max-width: 960px) {
    font-size: 48px;
  }
  @media (max-width: 720px) {
    font-size: 32px;
  }
  @media (max-width: 540px) {
    font-size: 25px;
  }
`;
export const H2 = styled.h2`
  font-family: 'Poppins';
  font-size: 40px;

  @media (max-width: 960px) {
    font-size: 35px;
  }
  @media (max-width: 720px) {
    font-size: 24px;
  }
`;
export const ParagraphyStyle = styled.p`
  font-family: 'Poppins';
  font-size: 22px;

  @media (max-width: 720px) {
    font-size: 18px;
  }
  @media (max-width: 540px) {
    font-size: 1rem;
  }
`;
