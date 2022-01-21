import { WrapperTextWhere } from './components';
import { DivWhere, MapImag } from './WhereAreWe.style';

///** TODO:
// - refatorar function para function component
// - renomear DIVWHERE

function WhereAreWe() {
  return (
    <DivWhere>
      <WrapperTextWhere />
      <MapImag />
    </DivWhere>
  );
}

export default WhereAreWe;
