import {
  WhereAreWeTitle,
  WhereAreWeSubTitle1,
  WhereAreWeSubTitle2,
  TextWhereAreWe,
} from './WrapperTextWhere.style';

///** TODO:
// - refatorar function para function component ok
// - mesma utilização errada do styled-component aqui, um p dentro de outro p ok
// - manter padrão de linguagem PT ou EN ok
// - como cada um dois locais é um objeto clicavel, não podemos utiliza-los dentro de uma mesma tag html ok

const WrapperTextWhere = () => {
  return (
    <>
      <WhereAreWeTitle>Onde estamos</WhereAreWeTitle>

      <WhereAreWeSubTitle1>Sede</WhereAreWeSubTitle1>

      <WhereAreWeSubTitle2>Saúde da Rua - SP</WhereAreWeSubTitle2>
      <TextWhereAreWe>
        Filiais
        <br></br>
        Saúde da Rua Campinas - SP
        <br></br>
        Saúde da Rua São José do Rio Preto - SP
        <br></br>
        Saúde da Rua São Carlos - SP
        <br></br>
        Saúde da Rua Sorocaba - SP
        <br></br>
        Saúde da Rua Itajaí - SC
        <br></br>
      </TextWhereAreWe>
    </>
  );
};

export default WrapperTextWhere;
