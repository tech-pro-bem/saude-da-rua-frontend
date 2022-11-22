import React from 'react';
import { SubTitle, Paragraphy, Highlight } from '@components';
import { MostUsedContent } from './MostUsedContent';

function MostUsed() {
  return (
    <MostUsedMedicines>
      <MostUsedHeader>
        <SubTitle>
          Medicamentos
          <Highlight> mais utilizados</Highlight>{' '}
        </SubTitle>
        <Paragraphy>
          A demanda é grande por alguns medicamentos e artigos em específico.
          Veja abaixo quais são:
        </Paragraphy>
      </MostUsedHeader>
      <MostUsedIcones>
        {MostUsedContent.map((item) => {
          return (
            <MostUsedIcon>
              <img src={item.img.src} alt={item.img.alt} />
              <p>{item.title}</p>
            </MostUsedIcon>
          );
        })}
      </MostUsedIcones>
    </MostUsedMedicines>
  );
}

export default MostUsed;
