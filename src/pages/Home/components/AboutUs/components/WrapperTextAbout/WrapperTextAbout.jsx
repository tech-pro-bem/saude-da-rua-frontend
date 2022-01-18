import {
  OndeEstamosTitle,
  OndeEstamosSubTitle1,
  OndeEstamosSubTitle2,
  TextWhere,
} from './WrapperTextAbout.style';

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
          {' '}
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
