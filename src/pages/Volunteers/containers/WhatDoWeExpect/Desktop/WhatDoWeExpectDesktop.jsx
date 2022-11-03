import { Highlight } from '@components';
import { Container, GridContent } from './WhatDoWeExpectDesktop.style';

const values = [
  {
    id: 1,
    trigger: 'Comprometimento',
    content: 'Trabalho voluntário deve ser levado a sério!',
    content2:
      'Por isso, pontualidade e comunicação são cruciais nessa jornada.',
  },
  {
    id: 2,
    trigger: 'Disponibilidade',
    content:
      'Nós contamos com você durante toda a sua jornada voluntária, desde o momento da aplicação até o seu último dia com a gente.',
  },
  {
    id: 3,
    trigger: 'Empatia',
    content:
      'A habilidade de se colocar no lugar de outras pessoas e agir de forma solidária é a base do nosso trabalho.',
  },
  {
    id: 4,
    trigger: 'Proatividade',
    content:
      'Identifique necessidades e antecipe problemas. Aproveite ao máximo seu tempo com a gente para se doar!',
  },
  {
    id: 5,
    trigger: 'Respeito',
    content:
      'Aqui no Saúde da Rua, o respeito está em todas as nossas interações: do paciente acolhido ao local do atendimento.',
  },
  {
    id: 6,
    trigger: 'Viva a experiência',
    content:
      'Trocar conhecimento, desenvolver novas habilidades e fazer o bem ao próximo são apenas algumas das recompensas dessa experiência incrível!',
  },
];

const WhatDoWeExpectDesktop = () => {
  return (
    <Container>
      <h3>
        O que esperamos de <Highlight>você</Highlight>?
      </h3>
      <GridContent>
        {values.map((item) => (
          <div key={item.id}>
            <h4>{item.trigger}</h4>
            <p>{item.content}</p>
            <p>{item.content2}</p>
          </div>
        ))}
      </GridContent>
    </Container>
  );
};

export default WhatDoWeExpectDesktop;
