import { AboutTitle, AboutText } from './WrapperTextAboutUs.style';

///** TODO:
// - refatorar function para function component ok
// - manter padrão da linguagem (ou PT ou EN) ok
// - por que foi utilizado um Fragment aqui?
// A utilização de uma div estilizada facilitaria a organização de estilo
// - rodar o console log para ver os erros que indicam aqui
// - um p não pode existir dentro de outro p (QuemSomosTitle)

const WrapperTextAboutUs = () => {
  return (
    <div>
      <AboutTitle>
        <h2>Quem somos</h2>
      </AboutTitle>
      <AboutText>
        <p className="big">
          O Saúde da Rua nasceu em julho de 2020, em meio à pandemia do
          Covid-19, com a missão de{' '}
          <strong> levar atendimento médico humanizado </strong>e recorrente às
          camadas mais vulneráveis da sociedade.
        </p>

        <p className="big">
          Desde então, com o trabalho de cerca de
          <strong> 500 voluntários </strong> realizamos diversas ações, com o
          objetivo de promover um
          <strong> serviço de alta qualidade </strong>, de forma individualizada
          e única, direcionado as
          <strong> reais necessidades do paciente</strong>.
        </p>
      </AboutText>
    </div>
  );
};

export default WrapperTextAboutUs;
