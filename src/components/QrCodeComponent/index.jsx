import { GenerateQrCode } from '@shared/services';
import QRCode from 'react-qr-code';
import { useQuery } from 'react-query';

export function QrCodeComponent() {
  const { isLoading, error, data } = useQuery('qrCode', async () => {
    const { key } = await GenerateQrCode();
    return key;
  });
  console.log('CHAVE PIX', data);

  if (isLoading) return <p>Carregando</p>;
  if (error) return <p>Erro</p>;
  if (data)
    return (
      <div
        style={{
          height: 'auto',
          margin: '0 auto',
          maxWidth: 64,
          width: '100%',
        }}
      >
        <QRCode value={data} />
      </div>
    );
  return null;
}
