import Structure from '../../components/Structure/Structure';
import { Head, useMedia } from '../../hooks';
import {
  WhatToContinueContributedDesktop,
  WhatToContinueContributedMobile,
} from './containers';

const Medicament = () => {
  const mobile = useMedia('(max-width:960px)');
  return (
    <>
      <Head
        title="Medicamentos"
        description="Sabe aqueles remédios que você não usa mais? Você pode doar pra gente."
      />

      <Structure>
        {mobile ? (
          <WhatToContinueContributedMobile />
        ) : (
          <WhatToContinueContributedDesktop />
        )}
      </Structure>
    </>
  );
};
export default Medicament;
