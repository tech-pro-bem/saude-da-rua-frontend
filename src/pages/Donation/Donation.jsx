import { Structure } from '@components';
import { useMedia } from '../../hooks';
import {
  HelpNowDesktop,
  HelpNowMobile,
  HowYourDonationHelp,
  Store,
  GalleryAndQuantation,
} from './containers';

const Donation = () => {
  const mobile = useMedia('(max-width: 768px)');
  return (
    <>
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
      </Structure>
    </>
  );
};

export default Donation;
