import { Structure } from '@components';
import {
  Banner,
  WhoCanVolunteer,
  WhatDoWeExpectDesktop,
  WhatDoWeExpectMobile,
} from './containers';
import { Head, useMedia } from '@hooks';
import { VolunteersContainer } from './containers/Volunteers.style';

const Volunteers = () => {
  const mobile = useMedia('(max-width:640px)');
  return (
    <>
      <Banner />
      <Head
        title="Seja voluntario"
        description="Se você é profissional ou estudante da área da saúde, participe das ações do Saúde da Rua"
      />
      <VolunteersContainer>
        <Structure>
          <WhoCanVolunteer />
          {mobile ? <WhatDoWeExpectMobile /> : <WhatDoWeExpectDesktop />}
        </Structure>
      </VolunteersContainer>
    </>
  );
};

export default Volunteers;
