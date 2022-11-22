import React from 'react';
import {
  Highlight,
  LinkButton,
  Title,
  SubTitle,
  OutlinedImageAnimation,
  Paragraphy,
} from '@components';
import {
  ContainerMedicine,
  MedicineBackground,
  MedicineContent,
} from './DonateMedication.style';
import { useInView } from 'react-intersection-observer';
import { Medicamentos5 } from '@assets/MedicinePage';
import {
  WhatMedicinesCanYouDonate,
  WhatMedicinesCanYouDonateImageContainer,
} from '../MedicationStorage/Desktop/MedicationStorageDesktop.style';

const DonateMedication = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <>
      <ContainerMedicine>
        <MedicineBackground />
        <MedicineContent>
          <div className="container">
            <Title>
              Doe <Highlight>medicamentos</Highlight>
            </Title>
            <Paragraphy className="big">
              Sabe aqueles remédios que você não usa mais? <br />
              Você pode doar pra gente.
            </Paragraphy>
            <div className="button">
              <LinkButton
                style={{ minWidth: '272px', textAlign: 'center' }}
                text="Quero doar medicamentos"
                route="/formulario-doacao"
              />
            </div>
          </div>
        </MedicineContent>
      </ContainerMedicine>
      <WhatMedicinesCanYouDonate className="container">
        <div>
          <SubTitle>
            <Highlight>Quais remédios </Highlight>
            você  pode doar?
          </SubTitle>
          <Paragraphy>
            Não há restrições. Nós aceitamos qualquer medicamento ou equipamento
            de EPI que esteja dentro do prazo de validade e que foi armazenado
            corretamente.
          </Paragraphy>
        </div>

        <WhatMedicinesCanYouDonateImageContainer>
          <OutlinedImageAnimation
            outlineBorderRadius={'12px'}
            rightOffset={'-8px'}
            topOffset={'none'}
            leftOffset={'none'}
            bottomOffset={'-8px'}
            src={Medicamentos5}
            imgBorderRadius={'12px'}
            myRef={ref}
            inView={inView}
            animation={inView}
          />
        </WhatMedicinesCanYouDonateImageContainer>
      </WhatMedicinesCanYouDonate>
    </>
  );
};

export default DonateMedication;
