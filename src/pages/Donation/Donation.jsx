import { Structure } from '@components';
import { Head, useMedia } from '../../hooks';
import {
  HelpNowDesktop,
  HelpNowMobile,
  HowYourDonationHelp,
  Store,
  GalleryAndQuantation,
  WhereYourDonationGoes,
} from './containers';

const Donation = () => {
  const mobile = useMedia('(max-width: 768px)');
  return (
    <>
      <Head title="Doações" description="Doe para Saúde da Rua" />

      {mobile ? (
        <HelpNowMobile />
      ) : (
        <Structure>
          <HelpNowDesktop />
        </Structure>
      )}
      <HowYourDonationHelp />
      <GalleryAndQuantation />
      <Structure>
        <Store />
        <WhereYourDonationGoes />
      </Structure>
    </>
  );
};

export default Donation;
