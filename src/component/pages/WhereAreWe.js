import { DivWhere } from '../layout/styles';

import WrapperTextWhere from '../layout/WrapperTextWhere';
import Map from '../layout/Map';

function WhereAreWe() {
  return (
    <>
      <DivWhere>
        {/*  <WrapperTextWhere/> ERRO RESOLVIDO*/}

        <WrapperTextWhere />
        <Map />
      </DivWhere>
    </>
  );
}

export default WhereAreWe;
