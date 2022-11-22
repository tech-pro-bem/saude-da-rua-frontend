import styled from 'styled-components';

export const MostUsedMedicines = styled.div`
  margin: 5rem 0;
`;
export const MostUsedHeader = styled.div`
  text-align: center;

  p {
    margin: 24px 0;
  }

  @media (max-width: 540px) {
    text-align: left;
  }
`;
export const MostUsedIcones = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding: 5rem 5rem 0 5rem;

  @media (max-width: 540px) {
    padding: 1rem 0;
  }
`;
export const MostUsedIcon = styled.div`
  margin: 0 auto;
  text-align: center;
`;
