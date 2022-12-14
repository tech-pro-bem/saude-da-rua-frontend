import { Structure } from '@components';
import { GenerateQrCode } from '@shared/services';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useQuery } from 'react-query';
import { Head, useMedia } from '../../hooks';
import {
  GalleryAndQuantation,
  HelpNowDesktop,
  HelpNowMobile,
  HowYourDonationHelp,
  Store,
} from './containers';

const Donation = () => {
  const mobile = useMedia('(max-width: 768px)');
  const { isLoading, data } = useQuery('qrCode', async () => {
    const { key } = await GenerateQrCode();
    return key;
  });

  return (
    <>
      <Head title="Doações" description="Doe para Saúde da Rua" />
      {isLoading ? (
        <Skeleton height={200} />
      ) : (
        <>
          {mobile ? (
            <HelpNowMobile data={data} />
          ) : (
            <Structure>
              <HelpNowDesktop data={data} />
            </Structure>
          )}
        </>
      )}
      <HowYourDonationHelp />
      <GalleryAndQuantation />
      <Structure>
        <Store />
      </Structure>
    </>
  );
};

export default Donation;
