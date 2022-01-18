import { ButtonPartners, PhotoPartners } from './components';
import { PartnersText, SpanColor, DivPartners } from './Partners.style';

function Partners() {
  return (
    <DivPartners>
      <PartnersText>
        <p>
          Empresas que nos <SpanColor>apoiam</SpanColor>
        </p>
      </PartnersText>

      <PhotoPartners />

      <ButtonPartners />
    </DivPartners>
  );
}

export default Partners;
