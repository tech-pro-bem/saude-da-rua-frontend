import { MdArrowForward } from 'react-icons/md';
import { Highlight } from '@components';
import { StoreRootContainer, Showcase, Button } from './StoreMobile.style';
import { store1, store2, store3 } from '@assets/donationPage';
import ShowcaseItemMobile from './components/ShowcaseItemMobile';

const StoreMobile = () => {
  return (
    <StoreRootContainer>
      <h2 style={{ marginBottom: '24px' }}>
        Conheça a nossa
        <a
          target="_blank"
          href="https://www.instagram.com/stories/highlights/17881146947177690"
          rel="noreferrer"
          style={{ marginLeft: '5px' }}
        >
          <Highlight>lojinha</Highlight>
        </a>
      </h2>
      <p>
        Acesse nossa loja no Instagram.
        <strong> Leve o Saúde da Rua com você!</strong>
      </p>
      <Showcase>
        <ShowcaseItemMobile
          src={store1}
          identifier="Camisetas"
          target={'_blank'}
          href={
            'https://www.instagram.com/stories/highlights/17881146947177690/'
          }
          rel={'noreferrer'}
        />
        <ShowcaseItemMobile
          src={store2}
          identifier="Agendas"
          target={'_blank'}
          href={
            'https://www.instagram.com/stories/highlights/17881146947177690/'
          }
          rel={'noreferrer'}
        />
        <ShowcaseItemMobile
          src={store3}
          identifier="Tirantes"
          target={'_blank'}
          href={
            'https://www.instagram.com/stories/highlights/17881146947177690/'
          }
          rel={'noreferrer'}
        />
      </Showcase>
      <Button
        target="_blank"
        href="https://www.instagram.com/stories/highlights/17881146947177690/"
        rel="noopener"
      >
        Comprar pelo Instagram <MdArrowForward style={{ marginLeft: '18px' }} />
      </Button>
    </StoreRootContainer>
  );
};

export default StoreMobile;
