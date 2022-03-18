import { MdArrowForward } from 'react-icons/md';
import ShowcaseItem from './components/ShowcaseItem';
import { Highlight } from '../../../../shared/components';
import { StoreRootContainer, Showcase, Button } from './Store.style';
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
        <ShowcaseItem src={store1} identifier="Camisetas" />
        <ShowcaseItem src={store2} identifier="Agendas" />
        <ShowcaseItem src={store3} identifier="Tirantes" />
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
