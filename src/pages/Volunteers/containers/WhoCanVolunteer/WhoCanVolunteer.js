import React from 'react';
import {
  Icone_Estudantes,
  Icone_Medicos,
  Icone_Enfermeiros,
  Icone_Nutricionista,
  Icone_Odontologia,
  Icone_Farmacia,
  Icone_Assistente_social,
  Icone_veterinario,
} from '@assets/svg';
import { WhoCanVolunteerMain } from './WhoCanVolunteer.style';

const data = [
  {
    id: 1,
    src: Icone_Estudantes,
    altText: 'Estudantes da <br/> área da Saúde',
  },
  {
    id: 2,
    src: Icone_Medicos,
    altText: 'Medicina',
  },
  {
    id: 3,
    src: Icone_Enfermeiros,
    altText: 'Enfermagem',
  },
  {
    id: 4,
    src: Icone_Nutricionista,
    altText: 'Nutrição',
  },
  {
    id: 5,
    src: Icone_Odontologia,
    altText: 'Odontologia',
  },
  {
    id: 6,
    src: Icone_Farmacia,
    altText: 'Farmácia',
  },
  {
    id: 7,
    src: Icone_Assistente_social,
    altText: 'Assistência Social<br/> e Psicologia',
  },
  {
    id: 8,
    src: Icone_veterinario,
    altText: 'Veterinária',
  },
];

const WhoCanVolunteer = () => {
  return (
    <WhoCanVolunteerMain>
      <div className="whocanHeader">
        <h1>
          Quem pode <span> se voluntariar</span>?
        </h1>
        <p>Procuramos profissionais voluntários das seguintes áreas:</p>
      </div>
      <section className="whocanBody">
        {data.map(({ altText, src, id }) => {
          return (
            <div key={id} className="whocanBodyChildren">
              <img src={src} alt={`Icone de ${altText}`} />
              <h4 dangerouslySetInnerHTML={{ __html: altText }} />
            </div>
          );
        })}
      </section>
    </WhoCanVolunteerMain>
  );
};

export default WhoCanVolunteer;
