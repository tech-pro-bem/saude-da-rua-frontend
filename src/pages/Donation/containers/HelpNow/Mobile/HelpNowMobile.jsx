import React from 'react';
import styled from 'styled-components';
import HelpNowHero from './containers/HelpNowHero';
import HowHelpContent from './containers/HowHelpContent';
const HelpInformation = {
  key: 'saudedarua@gmail.com',
  pix: {
    1: 'Copie a chave pix acima',
    2: 'Acesse a área pix no app do seu banco',
    3: 'Digite o valor da doação',
    4: 'Cole a chave pix na área indicada',
    5: 'Confira se o destinatário da conta é Gustavo Zaborowsky Graicer',
    6: 'Confirme todos os dados e faça a sua doação!',
  },
  bank: {
    Banco: 'Nu Pagamentos S.A. (260)',
    Agência: '0001',
    Conta: '20718046-2',
    Nome: 'Gustavo Zaborowsky Graicer',
  },
  boleto: {
    1: 'Envie um e-mail para financeiro.saudedarua@gmail.com indicando o valor da doação;',
    2: 'Aguarde nossa resposta, enviaremos o boleto no valor solicitado.',
  },
};

const Main = styled.main``;

const HelpNowMobile = () => {
  return (
    <Main>
      <HelpNowHero />
      <HowHelpContent HelpInformation={HelpInformation} />
    </Main>
  );
};

export default HelpNowMobile;
