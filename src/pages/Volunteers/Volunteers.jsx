import { Structure } from '../../shared/components';
import { Headline } from './components';
import InputDate from '../../shared/components/InputDate/InputDate';

const Volunteers = () => {
  return (
    <>
      <Headline />
      <Structure>
        <InputDate id="inputBirthday" registerValue="dataNacimento" />
      </Structure>
    </>
  );
};

export default Volunteers;
