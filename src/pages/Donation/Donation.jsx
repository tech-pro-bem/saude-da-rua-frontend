import { Structure } from '@components';
import { useMedia } from '../../hooks';
import {
  HelpNowDesktop,
  HelpNowMobile,
  HowYourDonationHelp,
  Store,
} from './containers';
import GalleryAndQuantation from './containers/GalleryAndQuantation';

const Donation = () => {
  const mobile = useMedia('(max-width: 768px)');
  return (
    <>
      <Structure>{mobile ? <HelpNowMobile /> : <HelpNowDesktop />}</Structure>
      <HowYourDonationHelp />
      <GalleryAndQuantation />
      <Structure>
        <Store />
      </Structure>
    </>
  );
};

export default Donation;
