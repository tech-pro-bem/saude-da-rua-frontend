import { useState } from 'react';
import {
  WhereAreWeTitle,
  WhereAreWeSubTitle1,
  Sede,
  TextWhereAreWe,
  Circle,
  CircleSede,
  Campinas,
  CircleCampinas,
  CircleRioPreto,
  RioPreto,
  CircleSaoCarlos,
  SaoCarlos,
  CircleSorocaba,
  Sorocaba,
  CircleItajai,
  Itajai,
} from './WrapperTextWhere.style';

const WrapperTextWhere = () => {
  //uma função para cada
  function ativarSede() {
    setSede(true);
    setCampinas(false);
    setRioPreto(false);
    setSaoCarlos(false);
    setSorocaba(false);
    setItajai(false);
  }

  function ativarCampinas() {
    setCampinas(true);
    setSede(false);
    setRioPreto(false);
    setSaoCarlos(false);
    setSorocaba(false);
    setItajai(false);
  }

  function ativarRioPreto() {
    setRioPreto(true);
    setSede(false);
    setCampinas(false);
    setSaoCarlos(false);
    setSorocaba(false);
    setItajai(false);
  }
  function ativarSaoCarlos() {
    setSaoCarlos(true);
    setRioPreto(false);
    setSede(false);
    setCampinas(false);
    setSorocaba(false);
    setItajai(false);
  }
  function ativarSorocaba() {
    setSorocaba(true);
    setSaoCarlos(false);
    setRioPreto(false);
    setSede(false);
    setCampinas(false);
    setItajai(false);
  }
  function ativarItajai() {
    setItajai(true);
    setSorocaba(false);
    setSaoCarlos(false);
    setRioPreto(false);
    setSede(false);
    setCampinas(false);
  }

  //uma função para cada
  const [sede, setSede] = useState(false);
  const [campinas, setCampinas] = useState(false);
  const [rioPreto, setRioPreto] = useState(false);
  const [saoCarlos, setSaoCarlos] = useState(false);
  const [sorocaba, setSorocaba] = useState(false);
  const [itajai, setItajai] = useState(false);

  return (
    <>
      <TextWhereAreWe>
        <WhereAreWeTitle>Onde estamos</WhereAreWeTitle>

        <WhereAreWeSubTitle1>Sede</WhereAreWeSubTitle1>

        <Sede sede={sede} onClick={ativarSede}>
          Saúde da Rua - SP
        </Sede>

        <p>Filiais</p>
        <br></br>
        <Campinas campinas={campinas} onClick={ativarCampinas}>
          Saúde da Rua Campinas - SP
        </Campinas>
        <br></br>
        <RioPreto rioPreto={rioPreto} onClick={ativarRioPreto}>
          Saúde da Rua São José do Rio Preto - SP
        </RioPreto>
        <br></br>
        <SaoCarlos saoCarlos={saoCarlos} onClick={ativarSaoCarlos}>
          Saúde da Rua São Carlos - SP
        </SaoCarlos>
        <br></br>
        <Sorocaba sorocaba={sorocaba} onClick={ativarSorocaba}>
          Saúde da Rua Sorocaba - SP
        </Sorocaba>
        <br></br>
        <Itajai itajai={itajai} onClick={ativarItajai}>
          Saúde da Rua Itajaí - SC
        </Itajai>
        <br></br>
      </TextWhereAreWe>

      {/*bolinhas referentes a cada filial */}

      <Circle>
        <CircleSede sede={sede} onClick={() => setSede(!sede)}></CircleSede>
        <CircleCampinas
          campinas={campinas}
          onClick={() => setCampinas(!campinas)}
        ></CircleCampinas>
        <CircleRioPreto
          rioPreto={rioPreto}
          onClick={() => setCampinas(!rioPreto)}
        ></CircleRioPreto>
        <CircleSaoCarlos
          saoCarlos={saoCarlos}
          onClick={() => setSaoCarlos(!saoCarlos)}
        ></CircleSaoCarlos>
        <CircleSorocaba
          sorocaba={sorocaba}
          onClick={() => setSorocaba(!sorocaba)}
        ></CircleSorocaba>
        <CircleItajai
          itajai={itajai}
          onClick={() => setItajai(!itajai)}
        ></CircleItajai>
      </Circle>
    </>
  );
};

export default WrapperTextWhere;
