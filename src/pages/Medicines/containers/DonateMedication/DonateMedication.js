import React from 'react';
import { MedicineBg } from '@assets';
import { Highlight, LinkButton } from '@components';
import styled from 'styled-components';

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
  grid-area: 1/1;
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 3rem;
  padding: 0 9%;

  h1 {
    margin-bottom: 32px;
  }
  p {
    margin-bottom: 48px;
  }
  .button {
    max-width: 400px;
  }

  @media (max-width: 875px) {
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

const DonateMedication = () => {
  return (
    <ContainerMedicine>
      <MedicineBackground />
      <MedicineContent>
        <h1>
          Doe <Highlight>medicamentos</Highlight>
        </h1>
        <p className="big">
          Sabe aqueles remédios que você não usa mais? <br />
          Você pode doar pra gente.
        </p>
        <div className="button">
          <LinkButton
            style={{ minWidth: '272px', textAlign: 'center' }}
            text="Quero doar medicamentos"
            route="/inscreva-se"
          />
        </div>
      </MedicineContent>
    </ContainerMedicine>
  );
};

export default DonateMedication;
