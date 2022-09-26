import React, { useRef, useState } from 'react';
import { ImageWithFrame } from '@components';
import { CopyToClip, helpImage } from '@assets/donationPage';
import { ClipBoardWrapper, HelpContainer } from './HelpNow.style';

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
      <h2>Chave pix</h2>
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
      <div className="haveborderBottom">
        <ol>
          {pixInfo.map((info, index) => {
            return <li key={index}>{info}</li>;
          })}
        </ol>
      </div>
      <div className="haveborderBottom">
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
          <li dangerouslySetInnerHTML={{ __html: first }} />
          <li dangerouslySetInnerHTML={{ __html: second }} />
        </ol>
      </div>
      <div className="haveImg">
        <ImageWithFrame src={helpImage} alt="sd" />
      </div>
    </HelpContainer>
  );
};

export default HowHelpContent;
