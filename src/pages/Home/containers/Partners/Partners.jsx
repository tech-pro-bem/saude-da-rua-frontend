import { ButtonPartners, PhotoPartners } from './components';
import { ContainerPartners } from './Partners.style';

import { Highlight } from '@components';

const Partners = () => {
  return (
    <ContainerPartners>
      <h3>
        Empresas que nos <Highlight>apoiam</Highlight>
      </h3>

      <PhotoPartners />

      <ButtonPartners />
    </ContainerPartners>
  );
};

export default Partners;
