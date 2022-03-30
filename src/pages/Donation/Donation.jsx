import { Structure } from '../../shared/components';
import { Gallery, HelpNow, HowYourDonationHelp, Store } from './components';

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
