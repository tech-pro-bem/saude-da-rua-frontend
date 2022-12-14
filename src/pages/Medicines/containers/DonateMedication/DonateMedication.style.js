import styled from 'styled-components';

import { MedicineBg } from '@assets';

export const ContainerMedicine = styled.div`
  display: grid;
  align-items: end;
`;
export const MedicineBackground = styled.div`
  background: url(${MedicineBg}) no-repeat;
  width: 100%;
  margin: 93px auto 0px auto;
  height: 600px;
  background-size: cover;
  grid-area: 1/1;

  @media (max-width: 875px) {
    margin: 0 auto;
    height: 424px;
  }
`;

export const MedicineContent = styled.div`
  max-width: 1167px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 3rem;
  grid-area: 1/1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h1 {
    margin-bottom: 32px;
  }
  p {
    margin-bottom: 48px;
  }
  .button {
    max-width: 400px;
  }

  @media (max-width: 720px) {
    margin-bottom: 0;
    h1 {
      font-size: 32px;
      margin-bottom: 24px;
    }
    p {
      font-size: 18px;
      margin-bottom: 40px;
    }
    .button {
      max-width: 100%;
      padding: 0;
      a {
        font-size: 16px;
      }
    }
  }
`;
