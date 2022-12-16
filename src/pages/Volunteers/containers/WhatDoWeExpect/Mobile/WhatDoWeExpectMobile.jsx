import { ChevronDownIcon } from '@radix-ui/react-icons';

import { Highlight } from '@components';
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  Container,
} from './WhatDoWeExpectMobile.style';

const values = [
  {
    id: 1,
    trigger: 'Comprometimento',
    content:
      'Trabalho voluntário deve ser levado a sério! Por isso, pontualidade e comunicação são cruciais nessa jornada.',
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
];

const WhatDoWeExpectMobile = () => {
  return (
    <Container>
      <h3>
        O que esperamos de <Highlight> você?</Highlight>
      </h3>
      <Accordion type="single" collapsible>
        {values.map((item) => (
          <AccordionItem key={item.id} value={`item-${item.id}`}>
            <AccordionHeader>
              <AccordionTrigger>
                {item.trigger}
                <ChevronDownIcon aria-hidden />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default WhatDoWeExpectMobile;
