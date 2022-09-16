import { Container } from './WrapperTextAboutUs.style';

function WrapperTextAboutUs() {
  return (
    <Container>
      <p className="first">
        O Saúde da Rua nasceu em 2020, em meio à pandemia do Covid-19, com a
        missão de <strong>levar atendimento médico humanizado</strong> às
        populações mais vulneráveis da sociedade.
      </p>
      <p className="second">
        De lá pra cá, com o apoio de cerca de 500 pessoas voluntárias, nossas
        ações promoveram{' '}
        <strong>assistência profissional e individualizada </strong>
        com foco nas reais necessidades do paciente.
      </p>
    </Container>
  );
}

export default WrapperTextAboutUs;
