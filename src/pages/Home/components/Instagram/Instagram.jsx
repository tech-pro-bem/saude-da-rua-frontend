import { ButtonInstagram } from './components';
import { ContainerInstagram, InstagramText } from './Instagram.style';

const Instagram = () => {
  return (
    <ContainerInstagram>
      <InstagramText>
        Acompanhe-nos no <span>Instagram</span>
      </InstagramText>

      <ButtonInstagram />
    </ContainerInstagram>
  );
};
export default Instagram;
