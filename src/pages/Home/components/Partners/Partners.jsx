import { ButtonPartners, PhotoPartners } from './components';
import { PartnersText, ContainerPartners } from './Partners.style';

const Partners = () => {
  return (
    <ContainerPartners>
      <PartnersText>
        Empresas que nos <span>apoiam</span>
      </PartnersText>

      <PhotoPartners />

      <ButtonPartners />
    </ContainerPartners>
  );
};

export default Partners;
