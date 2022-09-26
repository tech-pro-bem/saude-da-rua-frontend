import React, { useState } from 'react';
import { CopyToClip } from '@assets';
import { ClipBoardWrapper, HelpContainer } from './HelpNow.style';

const HowHelpContent = ({ HelpInformation }) => {
  const [isCopied, setIsCopied] = useState(false);
  const pixInfo = Object.values(HelpInformation.pix);
  const bankInfo = Object.entries(HelpInformation.bank);
  const boletoInfo = Object.values(HelpInformation.boleto);

  function Copy() {
    setIsCopied(!isCopied);
  }
  return (
    <HelpContainer>
      <ClipBoardWrapper>
        <input type="text" value={HelpInformation.key} disabled />
        <button onClick={Copy}>
          {isCopied ? (
            'Copiado!'
          ) : (
            <img src={CopyToClip} alt="icon de clipboard" />
          )}
        </button>
      </ClipBoardWrapper>
      <div>
        <h2>Chave pix</h2>
        <ol>
          {pixInfo.map((info, index) => {
            return <li key={index}>{info}</li>;
          })}
        </ol>
      </div>
      <div>
        <h2>Transferência bancária</h2>
        <ul>
          {bankInfo.map((info, index) => {
            return (
              <li key={index}>
                <strong>{info[0]}:</strong> {info[1]}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2>Boleto</h2>
        <ol>
          {boletoInfo.map((boleto, index) => {
            return <li key={index}>{boleto}</li>;
          })}
        </ol>
      </div>
      <div></div>
    </HelpContainer>
  );
};

export default HowHelpContent;
