import {
  OndeEstamosTitle,
  OndeEstamosSubTitle1,
  OndeEstamosSubTitle2,
  TextWhere,
} from './WrapperTextWhere.style';

///** TODO:
// - refatorar function para function component
// - mesma utilização errada do styled-component aqui, um p dentro de outro p
// - manter padrão de linguagem PT ou EN
// - como cada um dois locais é um objeto clicavel, não podemos utiliza-los dentro de uma mesma tag html

function WrapperTextWhere() {
  return (
    <>
      <OndeEstamosTitle>
        <p>Onde estamos</p>
      </OndeEstamosTitle>

      <OndeEstamosSubTitle1>
        <p>Sede</p>
      </OndeEstamosSubTitle1>

      <OndeEstamosSubTitle2>
        <p>Saúde da Rua - SP</p>
      </OndeEstamosSubTitle2>
      <TextWhere>
        <p>Filiais </p>
        <p>
          Saúde da Rua Campinas - SP
          <br></br>
          Saúde da Rua Itajaí - SC
          <br></br>
          Saúde da Rua São Carlos - SP
          <br></br>
          Saúde da Rua São José do Rio Preto - SP
        </p>
      </TextWhere>
    </>
  );
}

export default WrapperTextWhere;
