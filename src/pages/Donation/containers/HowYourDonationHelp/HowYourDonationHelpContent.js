import { assistanceIcon, healthcareIcon, supportIcon } from '@assets/svg';

export const accountabilityItemContent = [
  {
    img: {
      order: 1,
      src: supportIcon,
      alt: 'ícone de pessoa ao lado de um coração',
    },
    content: {
      order: 2,
      title: 'Acolhimento',
      paragraph:
        '<strong>Acolhimento</strong> das pessoas em situação de rua, usuários de drogas e crianças em situação de risco.',
    },
  },
  {
    img: {
      order: 2,
      src: assistanceIcon,
      alt: 'Ícone de duas mãos abertas e um sinal de cruz da medicina',
    },
    content: {
      order: 1,
      title: 'Atendimento',
      paragraph:
        '<strong>Triagem e atendimento médico</strong> humanizado adulto e pediátrico, respeitando os princípios da equidade.',
    },
  },
  {
    img: {
      order: 1,
      src: healthcareIcon,
      alt: 'ícone de cuidados médicos com itens medicinais',
    },
    content: {
      order: 2,
      title: 'Tratamentos',
      paragraph: `<strong>Medicamentos, aferição da pressão arterial e testes rápidos</strong>  - glicemia, hepatites B e C, HIV, sífilis e covid-19.`,
    },
  },
];
