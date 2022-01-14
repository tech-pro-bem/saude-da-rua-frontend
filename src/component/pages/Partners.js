import ButtonPartners from '../layout/ButtonPartners';
import PhotoPartners from '../layout/PhotoPartners';

import { DivPartners, PartnersText, SpanColor } from '../layout/styles';

function Partners() {
  return (
    <>
      <DivPartners>
        <PartnersText>
          <p>
            Empresas que nos <SpanColor>apoiam</SpanColor>
          </p>
        </PartnersText>

        <PhotoPartners />

        <ButtonPartners />
      </DivPartners>
    </>
  );
}

export default Partners;
