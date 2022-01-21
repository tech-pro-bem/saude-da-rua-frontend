import { partnersLogo } from '../../../../../../assets/index';
import { PartnersPhoto } from './PhotoPartners.style';

///** TODO:
// - refatorar function para function component

function PhotoPartners() {
  return <PartnersPhoto src={partnersLogo} alt="Nossos parceiros" />;
}

export default PhotoPartners;
