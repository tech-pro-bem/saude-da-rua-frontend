import Mapa from './../../img/mapa.png';

// import { MapImag } from './styles';

///** TODO:
// - refatorar function para function component
// - a extensão do arquivo está como js, como se trata de um react component deve ser JSX
// - não há necessidade de um fragment aqui
// - melhorar a descrição da imagem

function Map() {
  return (
    <>
      <MapImag src={Mapa} alt="Foto do Mapa" />;
    </>
  );
}

export default Map;
