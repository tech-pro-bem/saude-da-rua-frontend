import { useState } from 'react';
import { useQuery } from 'react-query';
const baseURL = process.env.REACT_APP_IG_BASE_URL;

export function QrCodeComponent() {
  const [qrcode, setQrcode] = useState('');
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(`${{ baseURL }}/pix`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => console.log(json))
  );
  console.log(baseURL);
  return (
    <div
    /* style={{ height: 'auto', margin: '0 auto', maxWidth: 64, width: '100%' }} */
    >
      {/* <QRCode value={qrcode} /> */}
    </div>
  );
}
