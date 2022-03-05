import { Structure } from '../../shared/components';
import HelpNow from './components/HelpNow/HelpNow';
import HowYourDonationHelp from './components/HowYourDonationHelp/HowYourDonationHelp';

const Donation = () => {
  return (
    <>
      <Structure>
        <HelpNow />
      </Structure>
      <HowYourDonationHelp />
    </>
  );
};

export default Donation;
