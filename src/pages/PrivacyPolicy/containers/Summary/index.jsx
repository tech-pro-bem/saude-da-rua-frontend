import { useState } from 'react';
import { Link, List, Navigation } from './Summary.style';

export const Summary = () => {
  const [activeLink, setActiveLink] = useState('#');

  return (
    <Navigation>
      <ul>
        <List>
          <Link
            href="#secao1"
            className={activeLink === '#secao1' ? 'active' : ''}
            onClick={() => setActiveLink('#secao1')}
          >
            <span>Seção 1</span> Informações Gerais
          </Link>
        </List>

        <List>
          <Link
            href="#secao2"
            onClick={() => setActiveLink('#secao2')}
            className={activeLink === '#secao2' ? 'active' : ''}
          >
            <span>Seção 2</span> Como recolhemos os dados pessoais?
          </Link>
        </List>

        <List>
          <Link
            href="#secao2.1"
            onClick={() => setActiveLink('#secao2.1')}
            className={activeLink === '#secao2.1' ? 'active' : ''}
          >
            <span>Seção 2.1</span>
            Quem deve utilizar nosso site?
          </Link>
        </List>

        <List>
          <Link
            href="#secao3"
            onClick={() => setActiveLink('#secao3')}
            className={activeLink === '#secao3' ? 'active' : ''}
          >
            <span>Seção 3</span> Quais dados pessoais coletamos?
          </Link>
        </List>

        <List>
          <Link
            href="#secao4"
            onClick={() => setActiveLink('#secao4')}
            className={activeLink === '#secao4' ? 'active' : ''}
          >
            <span>Seção 4</span> Quais dados pessoais coletamos?
          </Link>
        </List>

        <List>
          <Link
            href="#secao5"
            className={activeLink === '#secao5' ? 'active' : ''}
            onClick={() => setActiveLink('#secao5')}
          >
            <span>Seção 5</span> Por quanto tempo os dados ficam armazenados?
          </Link>
        </List>

        <List>
          <Link
            href="#secao6"
            className={activeLink === '#secao6' ? 'active' : ''}
            onClick={() => setActiveLink('#secao6')}
          >
            <span>Seção 6</span> Segurança dos dados coletados e armazenados
          </Link>
        </List>

        <List>
          <Link
            href="#secao7"
            className={activeLink === '#secao7' ? 'active' : ''}
            onClick={() => setActiveLink('#secao7')}
          >
            <span>Seção 7</span> Compartilhamento de dados
          </Link>
        </List>

        <List>
          <Link
            href="#secao8"
            className={activeLink === '#secao8' ? 'active' : ''}
            onClick={() => setActiveLink('#secao8')}
          >
            <span>Seção 8</span> Cookies e Dados de navegação
          </Link>
        </List>

        <List>
          <Link
            href="#secao9"
            className={activeLink === '#secao9' ? 'active' : ''}
            onClick={() => setActiveLink('#secao9')}
          >
            <span>Seção 9</span> Consentimento legal
          </Link>
        </List>

        <List>
          <Link
            href="#secao10"
            className={activeLink === '#secao10' ? 'active' : ''}
            onClick={() => setActiveLink('#secao10')}
          >
            <span>Seção 10 </span> Alterações na atual Política de Privacidade
          </Link>
        </List>

        <List>
          <Link
            href="#secao11"
            className={activeLink === '#secao11' ? 'active' : ''}
            onClick={() => setActiveLink('#secao11')}
          >
            <span> Seção 11 </span> Jurisdição para resolução de conflitos
          </Link>
        </List>
      </ul>
    </Navigation>
  );
};
