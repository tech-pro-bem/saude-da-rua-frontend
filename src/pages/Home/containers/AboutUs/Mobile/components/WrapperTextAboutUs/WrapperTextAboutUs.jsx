import { Container } from './WrapperTextAboutUs.style';

function WrapperTextAboutUs() {
  return (
    <Container>
      <p className="big">
        O Saúde da Rua nasceu em 2020, em <br />
        meio à pandemia do Covid-19, com a <br />
        missão de{' '}
        <strong>
          levar atendimento médico
          <br />
          humanizado
        </strong>{' '}
        às populações mais
        <br />
        vulneráveis da sociedade.
        <br />
      </p>
      <p className="big">
        De lá pra cá, com o apoio de cerca de <br />
        500 pessoas voluntárias, nossas ações <br />
        promoveram{' '}
        <strong>
          assistência profissional e <br />
          individualizada{' '}
        </strong>
        com foco nas reais <br />
        necessidades do paciente. <br />
      </p>
    </Container>
  );
}

export default WrapperTextAboutUs;
