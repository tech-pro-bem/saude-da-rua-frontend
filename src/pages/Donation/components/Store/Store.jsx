import { MdArrowForward } from 'react-icons/md';
import { Highlight, OutlinedImage } from '../../../../shared/components';
import {
  StoreRootContainer,
  Showcase,
  Button,
  ShowcaseItem,
} from './Store.style';
import { store1, store2, store3 } from '../../../../assets/donationPage';

const Store = () => {
  return (
    <StoreRootContainer>
      <h2 style={{ marginBottom: '16px' }}>
        Conheça também a nossa <Highlight>lojinha</Highlight>
      </h2>
      <p>
        Apoie o Saúde da Rua adquirindo os nossos produtos! Confira os itens
        disponíveis no nosso Instagram e, para comprar, mande-nos uma mensagem:
      </p>
      <Showcase>
        <ShowcaseItem>
          <OutlinedImage
            src={store1}
            imgBorderRadius="8px"
            leftOffset="-8px"
            topOffset="-8px"
            bottomOffset="12px"
            rightOffset="8px"
            width="162px"
            height="170px"
          />
          <p>Camisetas</p>
        </ShowcaseItem>
        <ShowcaseItem>
          <OutlinedImage
            src={store2}
            imgBorderRadius="8px"
            leftOffset="-8px"
            topOffset="-8px"
            bottomOffset="12px"
            rightOffset="8px"
            width="162px"
            height="170px"
          />
          <p>Agendas</p>
        </ShowcaseItem>
        <ShowcaseItem>
          <OutlinedImage
            src={store3}
            imgBorderRadius="8px"
            leftOffset="-8px"
            topOffset="-8px"
            bottomOffset="12px"
            rightOffset="8px"
            width="162px"
            height="170px"
          />
          <p>Tirantes</p>
        </ShowcaseItem>
      </Showcase>
      <Button
        target="_blank"
        href="https://www.instagram.com/stories/highlights/17881146947177690/"
        rel="noopener"
        style={{ alignSelf: 'flex-end' }}
      >
        Comprar pelo Instagram <MdArrowForward style={{ marginLeft: '8px' }} />
      </Button>
    </StoreRootContainer>
  );
};

export default Store;
