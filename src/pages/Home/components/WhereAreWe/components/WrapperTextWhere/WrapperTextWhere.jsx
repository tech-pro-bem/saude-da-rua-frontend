import { useState } from 'react';
import {
  Container,
  Sede,
  TextWhereAreWe,
  WrapCircles,
  CircleSede,
  City,
  CircleCampinas,
  CircleRioPreto,
  CircleSaoCarlos,
  CircleSorocaba,
  CircleItajai,
} from './WrapperTextWhere.style';

// TODO: refatorar para apenas uma função que recebe o paramentro de qual cidade foi selecionada

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

  const [sede, setSede] = useState(false);
  const [campinas, setCampinas] = useState(false);
  const [rioPreto, setRioPreto] = useState(false);
  const [saoCarlos, setSaoCarlos] = useState(false);
  const [sorocaba, setSorocaba] = useState(false);
  const [itajai, setItajai] = useState(false);

  const places = [
    { key: 1, city: 'Saúde da Rua Campinas - SP', fn: ativarCampinas },
    {
      key: 2,
      city: 'Saúde da Rua São José do Rio Preto - SP',
      fn: ativarRioPreto,
    },
    {
      key: 3,
      city: 'Saúde da Rua São Carlos - SP',
      fn: ativarSaoCarlos,
    },
    {
      key: 4,
      city: 'Saúde da Rua Sorocaba - SP',
      fn: ativarSorocaba,
    },
    {
      key: 5,
      city: 'Saúde da Rua Itajaí - SC',
      fn: ativarItajai,
    },
  ];

  return (
    <Container>
      <TextWhereAreWe>
        <h2>Onde estamos</h2>

        <h3>Sede</h3>
        <Sede sede={sede} onClick={ativarSede}>
          Saúde da Rua - SP
        </Sede>

        <h3>Filiais</h3>
        {places.map((place) => (
          <City onClick={place.fn} key={place.key}>
            {place.city}
          </City>
        ))}
      </TextWhereAreWe>

      {/*bolinhas referentes a cada filial */}
      <WrapCircles>
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
        <CircleSede sede={sede} onClick={() => setSede(!sede)}></CircleSede>

        <CircleItajai
          itajai={itajai}
          onClick={() => setItajai(!itajai)}
        ></CircleItajai>
      </WrapCircles>
    </Container>
  );
};

export default WrapperTextWhere;
