import { WrapperTextWhere } from './components';
import PhotoMap from './components/Map/PhotoMap';
import { ContainerWhereAreWe } from './WhereAreWe.style';

///** TODO:
// - refatorar function para function component ok
// - renomear DIVWHERE ok

const WhereAreWe = () => {
  return (
    <ContainerWhereAreWe>
      <WrapperTextWhere />
      <PhotoMap />
    </ContainerWhereAreWe>
  );
};

export default WhereAreWe;
