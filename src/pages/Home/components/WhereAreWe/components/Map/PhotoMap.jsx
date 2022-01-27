import mapa from '../../../../../../assets/mapa.png';

import { MapImagStyle } from './MapStyles';

///** TODO:
// - refatorar function para function component ok
// - a extensão do arquivo está como js, como se trata de um react component deve ser JSX ok
// - não há necessidade de um fragment aqui ok
// - melhorar a descrição da imagem ok

const PhotoMap = () => {
  return <MapImagStyle src={mapa} alt="Mapa com as filiais" />;
};

export default PhotoMap;
