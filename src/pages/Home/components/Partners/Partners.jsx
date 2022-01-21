import { ButtonPartners, PhotoPartners } from './components';
import { PartnersText, SpanColor, DivPartners } from './Partners.style';

///** TODO:
// - refatorar function para function component
// - mesma utilização errada do styled-component aqui, um p dentro de outro p
// - renomear o component DIV PARTNERS

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
