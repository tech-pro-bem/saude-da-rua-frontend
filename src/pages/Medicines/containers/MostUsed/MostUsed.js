import React from 'react';
import { SubTitle, Paragraphy, Highlight, LinkButton } from '@components';
import { MostUsedContent } from './MostUsedContent';
import {
  MostUsedMedicines,
  MostUsedHeader,
  MostUsedIcones,
  MostUsedIcon,
} from './MostUsed.style';
import { useMedia } from '@hooks';

function MostUsed() {
  const mobile = useMedia('(max-width:540px)');
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
              <p dangerouslySetInnerHTML={{ __html: item.title }} />
            </MostUsedIcon>
          );
        })}
      </MostUsedIcones>
      {mobile && (
        <LinkButton
          style={{
            marginTop: '1rem',
            width: '100%',
            fontSize: '1rem',
            display: 'block',
            textAlign: 'center',
          }}
          text="Quero doar medicamentos"
          route="/formulario-doacao"
        />
      )}
    </MostUsedMedicines>
  );
}

export default MostUsed;
