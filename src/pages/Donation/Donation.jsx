import { Structure } from '@components';
import { HelpNow, HowYourDonationHelp, Store } from './containers';
import GalleryAndQuantation from './containers/GalleryAndQuantation';

const Donation = () => {
  return (
    <>
      <Structure>
        <HelpNow />
      </Structure>
      <HowYourDonationHelp />
      <GalleryAndQuantation />
      <Structure>
        <Store />
      </Structure>
    </>
  );
};

export default Donation;
