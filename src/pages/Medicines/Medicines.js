import React from 'react';
import { Head, useMedia } from '@hooks';
import { Structure } from '@components';
import {
  DonateMedication,
  MedicationPathMobile,
  MedicationPathDesktop,
  MedicationStorageMobile,
  MedicationStorageDesktop,
  InappropriateMedicationDesktop,
  InappropriateMedicationMobile,
  MedicationDisposalDesktop,
  MedicationDisposalMobile,
} from './containers';

// BreackPoint de Mobile podemos usar @media (max-width: 875px)
function Medicines() {
  const mobile = useMedia('(max-width:960px)');
  return (
    <div>
      <Head
        title="Doe medicamentos"
        description="Se você é profissional ou estudante da área da saúde, participe das ações do Saúde da Rua"
      />
      <DonateMedication />
      <Structure>
        {mobile ? <InappropriateMedicationMobile /> : null}
        {mobile ? <MedicationPathMobile /> : <MedicationPathDesktop />}
        {mobile ? <MedicationStorageMobile /> : <MedicationStorageDesktop />}
        {mobile ? null : (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <InappropriateMedicationDesktop />
            <MedicationDisposalDesktop />
          </div>
        )}
        {mobile ? <MedicationDisposalMobile /> : null}
      </Structure>
    </div>
  );
}

export default Medicines;
