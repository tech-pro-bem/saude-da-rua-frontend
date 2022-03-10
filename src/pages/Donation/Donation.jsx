import { Structure } from '../../shared/components';
import HelpNow from './components/HelpNow/HelpNow';
import Gallery from './components/Gallery/Gallery';
import HowYourDonationHelp from './components/HowYourDonationHelp/HowYourDonationHelp';


const Donation = () => {
  return (
    <>
      <Structure>
        <HelpNow />
      </Structure>
      <HowYourDonationHelp />
      <Structure>
        <Gallery />
      </Structure>
    </>
  );
};

export default Donation;
