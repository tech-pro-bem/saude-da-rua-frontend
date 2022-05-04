import { Structure } from '../../shared/components';
import InputDate from '../../shared/components/InputDate/InputDate';

const Volunteers = () => {
  return (
    <Structure>
      <InputDate
        id="inputBirthday"
        placeholder="dd/aa/mm"
        registerValue="dataNacimento"
      />

      <InputDate
        id="inputMerrid"
        placeholder="dd/mm/aa"
        registerValue="dataCasamento"
      />
    </Structure>
  );
};

export default Volunteers;
