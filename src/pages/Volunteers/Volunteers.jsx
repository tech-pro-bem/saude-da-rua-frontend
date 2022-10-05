import { Structure } from '@components';
import { Headline, ExperienceMobile, ExperienceDesktop } from './containers';
import { useMedia } from '../../hooks';

const Volunteers = () => {
  const mobile = useMedia('(max-width:960px)');
  return (
    <>
      <Structure>
        {mobile ? <ExperienceMobile /> : <ExperienceDesktop />}
      </Structure>
    </>
  );
};

export default Volunteers;
