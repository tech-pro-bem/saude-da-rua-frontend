import { Highlight } from '../../../../shared/components';
import {
  ContainerInstagram,
  InstagramText,
  ButtonLinkInstagram,
  InstagramItemsContainer,
} from './Instagram.style';

const Instagram = () => {
  return (
    <ContainerInstagram>
      <InstagramText>
        Acompanhe-nos no <Highlight>Instagram</Highlight>
      </InstagramText>

      <InstagramItemsContainer>
        <div
          style={{ backgroundColor: 'red', width: '200px', height: '200px' }}
        ></div>
        <div
          style={{ backgroundColor: 'red', width: '200px', height: '200px' }}
        ></div>
        <div
          style={{ backgroundColor: 'red', width: '200px', height: '200px' }}
        ></div>
      </InstagramItemsContainer>

      <ButtonLinkInstagram style={{ alignSelf: 'flex-end' }}>
        Veja mais no Instagram
      </ButtonLinkInstagram>
    </ContainerInstagram>
  );
};

export default Instagram;
