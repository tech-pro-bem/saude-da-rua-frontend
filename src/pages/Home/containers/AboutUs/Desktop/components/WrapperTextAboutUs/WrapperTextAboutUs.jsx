import { Container } from './WrapperTextAboutUs.style';

function WrapperTextAboutUs() {
  return (
    <Container>
      <h2>Quem somos</h2>
      <p className="big" id="first">
        O Saúde da Rua nasceu em 2020, em meio à pandemia da Covid-19, com a
        missão de levar atendimento médico humanizado às populações mais
        vulneráveis da sociedade.
      </p>
      <p className="big">
        Desde então, com o apoio de cerca de 500 pessoas voluntárias, nossas
        ações promoveram assistência profissional e individualizada com foco nas
        reais necessidades do paciente.
      </p>
    </Container>
  );
}

export default WrapperTextAboutUs;
