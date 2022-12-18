import { usePix } from './pixHook';
import { QRCodeSVG } from 'qrcode.react';

const PixQRCode = ({ pixParams, children, onError, ...qrCodeProps }) => {
  // pixParams mandatory: chave, valor

  const recebedor = 'Não Identificado';
  const cidade = 'Não Identificada';
  const identificador = '00000';
  const pixParamsWithFallbacks = {
    recebedor,
    cidade,
    identificador,
    ...pixParams,
  };

  const pixCode = usePix(pixParamsWithFallbacks, onError);

  return pixCode === null ? (
    children
  ) : (
    <QRCodeSVG value={pixCode} {...qrCodeProps} />
  );
};

export default PixQRCode;
