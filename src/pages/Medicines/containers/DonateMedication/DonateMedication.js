import React from 'react';
import { Highlight, LinkButton } from '@components';
import {
  ContainerMedicine,
  MedicineBackground,
  MedicineContent,
} from './DonateMedication.style';

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
