import React from 'react';
import { Head } from '@hooks';
import { DonateMedication } from './containers';

// BreackPoint de Mobile podemos usar @media (max-width: 875px)
function Medicines() {
  return (
    <div>
      <Head
        title="Doe medicamentos"
        description="Se você é profissional ou estudante da área da saúde, participe das ações do Saúde da Rua"
      />
      <DonateMedication />
    </div>
  );
}

export default Medicines;
