import { Structure } from '@components';
import { Gallery, HelpNow, HowYourDonationHelp, Store } from './containers';

const Donation = () => {
  return (
    <>
      <Structure>
        <HelpNow />
      </Structure>
      <HowYourDonationHelp />
      <Structure>
        <Gallery />
        <Store />
      </Structure>
    </>
  );
};

export default Donation;
