import React, { useRef, useState } from 'react';
import { ImageWithFrame } from '@components';
import { CopyToClip, helpImage } from '@assets/donationPage';
import {
  ClipBoardWrapper,
  HaveborderBottom,
  HelpContainer,
  HelpHaveImg,
  TitleHelp,
} from './HelpNow.style';

const HowHelpContent = ({ HelpInformation }) => {
  const copiedText = HelpInformation?.key || '';
  const timout = useRef(null);

  const [isCopied, setIsCopied] = useState(false);
  const pixInfo = Object.values(HelpInformation.pix);
  const bankInfo = Object.entries(HelpInformation.bank);
  const { first, second } = HelpInformation.boleto;

  function Copy(copiedText) {
    if (!window?.navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }
    window.navigator.clipboard.writeText(copiedText);
    setIsCopied(true);
    clearInterval(timout.current);
    timout.current = setInterval(() => {
      setIsCopied(false);
    }, 30 * 1000); // 30 seconds
  }

  return (
    <HelpContainer>
      <TitleHelp>Chave pix</TitleHelp>
      <ClipBoardWrapper>
        <input type="text" value={copiedText} disabled />
        <button onClick={() => Copy(copiedText)}>
          {isCopied ? (
            'Copiado!'
          ) : (
            <img src={CopyToClip} alt="icon de clipboard" />
          )}
        </button>
      </ClipBoardWrapper>
      <HaveborderBottom>
        <ol>
          {pixInfo.map((info, index) => {
            return <li key={index}>{info}</li>;
          })}
        </ol>
      </HaveborderBottom>
      <HaveborderBottom>
        <TitleHelp>Transferência bancária</TitleHelp>
        <ul>
          {bankInfo.map((info, index) => {
            return (
              <li key={index}>
                <strong>{info[0]}:</strong> {info[1]}
              </li>
            );
          })}
        </ul>
      </HaveborderBottom>
      <div>
        <TitleHelp>Boleto</TitleHelp>
        <ol style={{ color: 'white', padding: '15px' }}>
          <li dangerouslySetInnerHTML={{ __html: first }} />
          <li dangerouslySetInnerHTML={{ __html: second }} />
        </ol>
      </div>
      <HelpHaveImg>
        <ImageWithFrame src={helpImage} alt="sd" />
      </HelpHaveImg>
    </HelpContainer>
  );
};

export default HowHelpContent;
