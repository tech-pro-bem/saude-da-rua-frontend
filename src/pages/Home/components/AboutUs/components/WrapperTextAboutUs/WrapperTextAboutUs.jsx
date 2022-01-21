import { QuemSomosTitle, AboutText } from './WrapperTextAboutUs.style';

///** TODO:
// - refatorar function para function component
// - manter padrão da linguagem (ou PT ou EN)
// - por que foi utilizado um Fragment aqui?
// A utilização de uma div estilizada facilitaria a organização de estilo
// - rodar o console log para ver os erros que indicam aqui
// - um p não pode existir dentro de outro p (QuemSomosTitle)

function WrapperTextAboutUs() {
  return (
    <>
      <QuemSomosTitle>
        <p>Quem somos</p>
      </QuemSomosTitle>
      <AboutText>
        O Saúde da Rua nasceu em julho de 2020, <br></br>
        em meio à pandemia do Covid-19, com a<br></br>
        missão de <b> levar atendimento médico humanizado </b>e recorrente às
        camadas
        <br></br>mais vulneráveis da sociedade.<br></br>
        <br></br> <br></br>
        Desde então, com o trabalho de cerca de <br></br> <b>500 voluntários</b>{' '}
        realizamos diversas<br></br>
        ações, com o objetivo de promover um <br></br>
        <b> serviço de alta qualidade </b>, de forma individualizada e única,
        direcionado as <br></br>
        <b> reais necessidades do paciente</b>.
      </AboutText>
    </>
  );
}

export default WrapperTextAboutUs;
